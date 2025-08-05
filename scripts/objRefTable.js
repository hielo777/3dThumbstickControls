const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Camera3D,
		C3.Plugins.Shape3D,
		C3.Behaviors.EightDir,
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Tilemap,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.LookAtPosition,
		C3.Plugins.Shape3D.Exps.X,
		C3.Plugins.Shape3D.Exps.Y,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.Sprite.Cnds.PickDistance,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.EightDir.Acts.SetVectorX,
		C3.Behaviors.EightDir.Acts.SetVectorY,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Acts.SetPos
	];
};
self.C3_JsPropNameTable = [
	{"3DCamera": 0},
	{"8Direction": 0},
	{Player: 0},
	{thumbstick2: 0},
	{DragDrop: 0},
	{thumbstick01: 0},
	{vx: 0},
	{vy: 0},
	{directionMarker: 0},
	{Tilemap: 0},
	{Touch: 0},
	{cameraHeight: 0},
	{speedPlayer: 0}
];

self.InstanceType = {
	_3DCamera: class extends self.IInstance {},
	Player: class extends self.I3DShapeInstance {},
	thumbstick2: class extends self.ISpriteInstance {},
	thumbstick01: class extends self.ISpriteInstance {},
	directionMarker: class extends self.ISpriteInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	Touch: class extends self.IInstance {}
}