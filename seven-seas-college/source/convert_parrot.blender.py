import bpy, mathutils, math
bpy.ops.wm.read_factory_settings(use_empty=True)
kill = ['CannonShape','CannonFrameShape_15_0','wheel_BackLShape_13_0','wheel_BackRShape_9_0','wheel_FrontLShape_11_0','wheel_FrontRShape_7_0','pTorusShape1']
bpy.ops.wm.usd_import(filepath="/tmp/parrot_usdz/scene.usdc")
for name in kill:
    o = bpy.data.objects.get(name)
    if o: bpy.data.objects.remove(o, do_unlink=True)
for m in list(bpy.data.materials):
    if m.name == 'CannonShape': bpy.data.materials.remove(m)

meshes = [o for o in bpy.data.objects if o.type=='MESH' and o.data and len(o.data.vertices)>0]
bpy.ops.object.select_all(action='DESELECT')
for o in meshes: o.select_set(True)
bpy.context.view_layer.objects.active = bpy.data.objects['BodyShape']
bpy.ops.object.join()
p = bpy.context.view_layer.objects.active
p.name = "PirateParrot"

# clear parent keeping world transform, then bake everything
bpy.ops.object.parent_clear(type='CLEAR_KEEP_TRANSFORM')
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
print("parent:", p.parent, "loc:", tuple(round(v,2) for v in p.location), "scale:", tuple(round(v,2) for v in p.scale))

# rotate 180 about X through origin
p.matrix_world = mathutils.Matrix.Rotation(math.radians(180), 4, 'X') @ p.matrix_world
bpy.context.view_layer.update()
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

xs=[];ys=[];zs=[]
for v in p.data.vertices:
    wc = p.matrix_world @ v.co
    xs.append(wc.x); ys.append(wc.y); zs.append(wc.z)
print("spans:", round(max(xs)-min(xs),1), round(max(ys)-min(ys),1), round(max(zs)-min(zs),1))
c = mathutils.Vector(((min(xs)+max(xs))/2,(min(ys)+max(ys))/2,(min(zs)+max(zs))/2))
p.location -= c
bpy.context.view_layer.update()
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

d = p.modifiers.new('dec','DECIMATE'); d.ratio = 0.25
bpy.context.view_layer.objects.active = p
bpy.ops.object.modifier_apply(modifier='dec')
print("faces:", len(p.data.polygons))

# remove leftover empties
for o in list(bpy.data.objects):
    if o.type == 'EMPTY':
        bpy.data.objects.remove(o, do_unlink=True)

bpy.ops.export_scene.gltf(filepath="/tmp/parrot_final.glb", export_format='GLB',
    use_selection=False, export_apply=True, export_image_format='JPEG')
print("EXPORT_DONE")
