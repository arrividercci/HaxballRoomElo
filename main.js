var room = HBInit({
    roomName: "ЧСВ ELO 4 v 4",
    maxPlayers: 16,
    noPlayer: true,
    public: true
});
const map1v1futsal = '{"name":"Futsal 1x1","width":420,"height":200,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":50},"vertexes":[{"x":-368,"y":171,"cMask":["ball"]},{"x":-368,"y":50,"cMask":["ball"]},{"x":-368,"y":-50,"cMask":["ball"]},{"x":-368,"y":-171,"cMask":["ball"]},{"x":368,"y":171,"cMask":["ball"]},{"x":368,"y":50,"cMask":["ball"]},{"x":368,"y":-50,"cMask":["ball"]},{"x":368,"y":-171,"cMask":["ball"]},{"x":0,"y":176,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":50,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-50,"bCoef":0,"cMask":[]},{"x":0,"y":-176,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-384,"y":-50,"bCoef":0.1},{"x":384,"y":-50,"bCoef":0.1},{"x":-384,"y":50,"bCoef":0.1},{"x":384,"y":50,"bCoef":0.1},{"x":-368,"y":-127,"bCoef":0,"cMask":[]},{"x":368,"y":-127,"bCoef":0,"cMask":[]},{"x":-368,"y":127,"bCoef":0,"cMask":[]},{"x":368,"y":127,"bCoef":0,"cMask":[]},{"x":-350,"y":-171,"bCoef":0,"cMask":[]},{"x":-368,"y":-163,"bCoef":0,"cMask":[]},{"x":350,"y":-171,"bCoef":0,"cMask":[]},{"x":368,"y":-163,"bCoef":0,"cMask":[]},{"x":-350,"y":171,"bCoef":0,"cMask":[]},{"x":-368,"y":163,"bCoef":0,"cMask":[]},{"x":350,"y":171,"bCoef":0,"cMask":[]},{"x":368,"y":163,"bCoef":0,"cMask":[]},{"x":368,"y":171,"cMask":["ball"]},{"x":368,"y":-171,"cMask":["ball"]},{"x":0,"y":171,"bCoef":0,"cMask":[]},{"x":0,"y":-171,"bCoef":0,"cMask":[]},{"x":0,"y":50,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-50,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":377,"y":-50,"cMask":["red"]},{"x":377,"y":-171,"cMask":["ball"]},{"x":-377,"y":-50,"cMask":["blue"]},{"x":-377,"y":-171,"cMask":["ball"]},{"x":-377,"y":50,"cMask":["blue"]},{"x":-377,"y":171,"cMask":["ball"]},{"x":377,"y":50,"cMask":["red"]},{"x":377,"y":171,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":12,"v1":2,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":6,"v1":13,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":1,"v1":14,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":15,"v1":5,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":14,"v1":12,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":13,"v1":15,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":1,"v1":0,"cMask":["ball"],"color":"FFFFFF"},{"v0":5,"v1":4,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":0,"v1":28,"cMask":["ball"],"color":"FFFFFF"},{"v0":3,"v1":29,"cMask":["ball"],"color":"FFFFFF"},{"v0":30,"v1":31,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":9,"v1":10,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":33,"v1":32,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":34,"v1":35,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":37,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":38,"v1":39,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":40,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["red"],"color":"FFFFFF"},{"v0":38,"v1":36,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["blue"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-171,"cMask":["ball"]},{"normal":[0,-1],"dist":-171,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.2},{"normal":[0,-1],"dist":-200,"bCoef":0.2},{"normal":[1,0],"dist":-420,"bCoef":0.2},{"normal":[-1,0],"dist":-420,"bCoef":0.2}],"goals":[{"p0":[-377,-50],"p1":[-377,50],"team":"red"},{"p0":[377,50],"p1":[377,-50],"team":"blue"}],"discs":[{"radius":6.4,"color":"EAFF00","cGroup":["ball","kick","score"]},{"pos":[-368,50],"radius":5,"bCoef":1,"invMass":0},{"pos":[-368,-50],"radius":5,"bCoef":1,"invMass":0},{"pos":[368,50],"radius":5,"bCoef":1,"invMass":0},{"pos":[368,-50],"radius":5,"bCoef":1,"invMass":0},{"pos":[383,51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]},{"pos":[-383,51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]},{"pos":[383,-51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]},{"pos":[-383,-51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":"disc0","spawnDistance":180}';
const map4v4futsal = '{"name":"Futsal 3x3 4x4","width":755,"height":339,"bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80},"vertexes":[{"x":-665,"y":290,"cMask":["ball"]},{"x":-665,"y":80,"cMask":["ball"]},{"x":-665,"y":-80,"cMask":["ball"]},{"x":-665,"y":-290,"cMask":["ball"]},{"x":665,"y":290,"cMask":["ball"]},{"x":665,"y":80,"cMask":["ball"]},{"x":665,"y":-80,"cMask":["ball"]},{"x":665,"y":-290,"cMask":["ball"]},{"x":0,"y":339,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0,"cMask":[]},{"x":0,"y":-339,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-693,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":693,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-693,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":693,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":-665,"y":-215,"bCoef":0,"cMask":[]},{"x":-500,"y":-50,"bCoef":0,"cMask":[]},{"x":665,"y":-215,"bCoef":0,"cMask":[]},{"x":500,"y":-50,"bCoef":0,"cMask":[]},{"x":-665,"y":215,"bCoef":0,"cMask":[]},{"x":-500,"y":50,"bCoef":0,"cMask":[]},{"x":665,"y":215,"bCoef":0,"cMask":[]},{"x":500,"y":50,"bCoef":0,"cMask":[]},{"x":665,"y":290,"cMask":["ball"]},{"x":665,"y":-290,"cMask":["ball"]},{"x":0,"y":290,"bCoef":0,"cMask":[]},{"x":0,"y":-290,"bCoef":0,"cMask":[]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":674,"y":-80,"cMask":["ball"]},{"x":674,"y":-290,"cMask":["ball"]},{"x":-674,"y":-80,"cMask":["ball"]},{"x":-674,"y":-290,"cMask":["ball"]},{"x":-674,"y":80,"cMask":["ball"]},{"x":-674,"y":290,"cMask":["ball"]},{"x":674,"y":80,"cMask":["ball"]},{"x":674,"y":290,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":12,"v1":2,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":13,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":14,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":15,"v1":5,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":12,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":13,"v1":15,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":19,"v1":18,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":21,"v1":20,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":22,"v1":23,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":17,"v1":21,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":19,"v1":23,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":1,"v1":0,"cMask":["ball"],"color":"FFFFFF"},{"v0":5,"v1":4,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":0,"v1":24,"cMask":["ball"],"color":"FFFFFF"},{"v0":3,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":9,"v1":10,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":29,"v1":28,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":30,"v1":31,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":37,"vis":false,"cMask":["ball"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-290,"cMask":["ball"]},{"normal":[0,-1],"dist":-290,"cMask":["ball"]},{"normal":[0,1],"dist":-339,"bCoef":0.2},{"normal":[0,-1],"dist":-339,"bCoef":0.2},{"normal":[1,0],"dist":-755,"bCoef":0.2},{"normal":[-1,0],"dist":-755,"bCoef":0.2}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"radius":6.4,"color":"EAFF00","cGroup":["ball","kick","score"]},{"pos":[-665,80],"radius":5,"bCoef":1,"invMass":0},{"pos":[-665,-80],"radius":5,"bCoef":1,"invMass":0},{"pos":[665,80],"radius":5,"bCoef":1,"invMass":0},{"pos":[665,-80],"radius":5,"bCoef":1,"invMass":0}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":"disc0","spawnDistance":310}';
const mapNoPlayers = '{"name":"Futsal training","width":420,"height":200,"bg":{"type":"hockey","width":420,"height":200,"kickOffRadius":80,"color":"58A380"},"vertexes":[{"x":424,"y":-2,"cMask":[],"cGroup":[]},{"x":-424,"y":-2,"cMask":[],"cGroup":[]},{"x":424,"y":0,"cMask":[],"cGroup":[]},{"x":-424,"y":0,"cMask":[],"cGroup":[]},{"x":424,"y":2,"cMask":[],"cGroup":[]},{"x":-424,"y":2,"cMask":[],"cGroup":[]},{"x":-424,"y":4,"cMask":[],"cGroup":[]},{"x":-144,"y":-204,"cMask":[],"cGroup":[]},{"x":-144,"y":204,"cMask":[],"cGroup":[]},{"x":-142,"y":-204,"cMask":[],"cGroup":[]},{"x":-142,"y":204,"cMask":[],"cGroup":[]},{"x":-140,"y":-204,"cMask":[],"cGroup":[]},{"x":-140,"y":204,"cMask":[],"cGroup":[]},{"x":-138,"y":-204,"cMask":[],"cGroup":[]},{"x":-138,"y":204,"cMask":[],"cGroup":[]},{"x":138,"y":-204,"cMask":[],"cGroup":[]},{"x":138,"y":204,"cMask":[],"cGroup":[]},{"x":140,"y":-204,"cMask":[],"cGroup":[]},{"x":140,"y":204,"cMask":[],"cGroup":[]},{"x":142,"y":-204,"cMask":[],"cGroup":[]},{"x":142,"y":204,"cMask":[],"cGroup":[]},{"x":144,"y":-204,"cMask":[],"cGroup":[]},{"x":144,"y":204,"cMask":[],"cGroup":[]},{"x":-137,"y":-200,"cMask":["ball"]},{"x":-137,"y":-4,"cMask":["ball"]},{"x":137,"y":-200,"cMask":["ball"]},{"x":137,"y":-4,"cMask":["ball"]},{"x":-137,"y":-200,"cMask":["ball"]},{"x":137,"y":-200,"cMask":["ball"]},{"x":-137,"y":-4,"cMask":["ball"]},{"x":137,"y":-4,"cMask":["ball"]},{"x":-420,"y":-200,"cMask":["ball"]},{"x":-420,"y":-4,"cMask":["ball"]},{"x":-146,"y":-200,"cMask":["ball"]},{"x":-146,"y":-4,"cMask":["ball"]},{"x":-420,"y":-200,"cMask":["ball"]},{"x":-146,"y":-200,"cMask":["ball"]},{"x":-420,"y":-4,"cMask":["ball"]},{"x":-146,"y":-4,"cMask":["ball"]},{"x":-420,"y":4,"cMask":["ball"]},{"x":-420,"y":200,"cMask":["ball"]},{"x":-146,"y":4,"cMask":["ball"]},{"x":-146,"y":200,"cMask":["ball"]},{"x":-420,"y":4,"cMask":["ball"]},{"x":-146,"y":4,"cMask":["ball"]},{"x":-420,"y":200,"cMask":["ball"]},{"x":-146,"y":200,"cMask":["ball"]},{"x":146,"y":-200,"cMask":["ball"]},{"x":146,"y":-4,"cMask":["ball"]},{"x":420,"y":-200,"cMask":["ball"]},{"x":420,"y":-4,"cMask":["ball"]},{"x":146,"y":-200,"cMask":["ball"]},{"x":420,"y":-200,"cMask":["ball"]},{"x":146,"y":-4,"cMask":["ball"]},{"x":420,"y":-4,"cMask":["ball"]},{"x":420,"y":4,"cMask":["ball"]},{"x":420,"y":200,"cMask":["ball"]},{"x":146,"y":4,"cMask":["ball"]},{"x":420,"y":4,"cMask":["ball"]},{"x":146,"y":200,"cMask":["ball"]},{"x":420,"y":200,"cMask":["ball"]},{"x":-137,"y":4,"cMask":["ball"]},{"x":-137,"y":200,"cMask":["ball"]},{"x":-137,"y":4,"cMask":["ball"]},{"x":137,"y":4,"cMask":["ball"]},{"x":-137,"y":200,"cMask":["ball"]},{"x":137,"y":200,"cMask":["ball"]},{"x":283,"y":-200,"cMask":[],"cGroup":[]},{"x":283,"y":-4,"cMask":[],"cGroup":[]},{"x":-283,"y":-200,"cMask":[],"cGroup":[]},{"x":-283,"y":-4,"cMask":[],"cGroup":[]},{"x":-283,"y":200,"cMask":[],"cGroup":[]},{"x":-283,"y":4,"cMask":[],"cGroup":[]},{"x":137,"y":4,"cMask":["ball"]},{"x":137,"y":200,"cMask":["ball"]},{"x":146,"y":4,"cMask":["ball"]},{"x":146,"y":200,"cMask":["ball"]},{"x":283,"y":200,"cMask":[],"cGroup":[]},{"x":283,"y":4,"cMask":[],"cGroup":[]}],"segments":[{"v0":0,"v1":1,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":2,"v1":3,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":4,"v1":5,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":7,"v1":8,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":9,"v1":10,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":11,"v1":12,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":13,"v1":14,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":15,"v1":16,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":17,"v1":18,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":19,"v1":20,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":21,"v1":22,"cMask":[],"cGroup":[],"color":"58A380"},{"v0":23,"v1":24,"cMask":["ball"],"color":"C7E6BD"},{"v0":25,"v1":26,"cMask":["ball"],"color":"C7E6BD"},{"v0":27,"v1":28,"cMask":["ball"],"color":"C7E6BD"},{"v0":29,"v1":30,"cMask":["ball"],"color":"C7E6BD"},{"v0":31,"v1":32,"cMask":["ball"],"color":"C7E6BD"},{"v0":33,"v1":34,"cMask":["ball"],"color":"C7E6BD"},{"v0":35,"v1":36,"cMask":["ball"],"color":"C7E6BD"},{"v0":37,"v1":38,"cMask":["ball"],"color":"C7E6BD"},{"v0":39,"v1":40,"cMask":["ball"],"color":"C7E6BD"},{"v0":41,"v1":42,"cMask":["ball"],"color":"C7E6BD"},{"v0":43,"v1":44,"cMask":["ball"],"color":"C7E6BD"},{"v0":45,"v1":46,"cMask":["ball"],"color":"C7E6BD"},{"v0":47,"v1":48,"cMask":["ball"],"color":"C7E6BD"},{"v0":49,"v1":50,"cMask":["ball"],"color":"C7E6BD"},{"v0":51,"v1":52,"cMask":["ball"],"color":"C7E6BD"},{"v0":53,"v1":54,"cMask":["ball"],"color":"C7E6BD"},{"v0":55,"v1":56,"cMask":["ball"],"color":"C7E6BD"},{"v0":57,"v1":58,"cMask":["ball"],"color":"C7E6BD"},{"v0":59,"v1":60,"cMask":["ball"],"color":"C7E6BD"},{"v0":61,"v1":62,"cMask":["ball"],"color":"C7E6BD"},{"v0":63,"v1":64,"cMask":["ball"],"color":"C7E6BD"},{"v0":65,"v1":66,"cMask":["ball"],"color":"C7E6BD"},{"v0":67,"v1":68,"cMask":[],"cGroup":[],"color":"C7E6BD"},{"v0":69,"v1":70,"cMask":[],"cGroup":[],"color":"C7E6BD"},{"v0":71,"v1":72,"cMask":[],"cGroup":[],"color":"C7E6BD"},{"v0":73,"v1":74,"cMask":["ball"],"color":"C7E6BD"},{"v0":75,"v1":76,"cMask":["ball"],"color":"C7E6BD"},{"v0":77,"v1":78,"cMask":[],"cGroup":[],"color":"C7E6BD"}],"planes":[{"normal":[0,1],"dist":-250,"bCoef":0.1},{"normal":[0,-1],"dist":-250,"bCoef":0.1},{"normal":[1,0],"dist":-500,"bCoef":0.1},{"normal":[-1,0],"dist":-500,"bCoef":0.1},{"normal":[0,1],"dist":-200,"cGroup":["c0","c1","c2"]},{"normal":[0,-1],"dist":-200,"cGroup":["c3"]},{"normal":[0,-1],"dist":4,"cGroup":["c0","c1","c2"]},{"normal":[0,1],"dist":4,"cGroup":["c3"]},{"normal":[1,0],"dist":-420,"cGroup":["c0","c1","c2"]},{"normal":[-1,0],"dist":-420,"cGroup":["c0","c1","c2"]},{"normal":[-1,0],"dist":146,"cGroup":["c0"]},{"normal":[1,0],"dist":-137,"cGroup":["c1"]},{"normal":[-1,0],"dist":-137,"cGroup":["c1"]},{"normal":[1,0],"dist":146,"cGroup":["c2"]},{"normal":[1,0],"dist":-420,"cGroup":["c3"]},{"normal":[-1,0],"dist":146,"cGroup":["c3"]},{"normal":[0,-1],"dist":-200,"cGroup":["kick","score"]},{"normal":[0,1],"dist":4,"cGroup":["kick","score"]},{"normal":[1,0],"dist":-137,"cGroup":["kick","score"]},{"normal":[-1,0],"dist":-420,"cGroup":["kick","score"]},{"normal":[-1,0],"dist":-137,"cGroup":["score"]},{"normal":[1,0],"dist":146,"cGroup":["kick"]}],"goals":[],"discs":[{"pos":[461,229],"radius":0.01,"invMass":1e-7,"cMask":["wall"],"cGroup":["ball","kick"]},{"pos":[-283,-97],"radius":6.4,"color":"CCCC0E","cMask":["red","blue","ball","c0"],"cGroup":["ball","kick"]},{"pos":[0,-97],"radius":6.4,"color":"CCCC0E","cMask":["red","blue","ball","c1"],"cGroup":["ball","kick"]},{"pos":[283,-97],"radius":6.4,"color":"CCCC0E","cMask":["red","blue","ball","c2"],"cGroup":["ball","kick"]},{"pos":[-283,97],"radius":6.4,"color":"CCCC0E","cMask":["red","blue","ball","c3"],"cGroup":["ball","kick"]},{"pos":[0,97],"radius":6.4,"color":"CCCC0E","cMask":["red","blue","ball","score"],"cGroup":["ball","kick"]},{"pos":[283,97],"radius":6.4,"color":"CCCC0E","cMask":["red","blue","ball","kick"],"cGroup":["ball","kick"]}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7,"radius":15.9852},"ballPhysics":"disc0","cameraFollow":"player","redSpawnPoints":[[-351,-97],[-68,-97],[351,-97],[-351,97],[-68,97],[351,97]],"blueSpawnPoints":[[-214,-97],[68,-97],[214,-97],[-214,97],[68,97],[214,97]]}';
let currentMap = mapNoPlayers;
const adminIds = ["iC_RjkxQbU2uFJQSf2PyC6JDu1rc7o7vSvg1wjl5Moo", "ptF_RRut6rQnU9MBfWQ_z9JCb32HQllLXYYoH1dj92o"];
class Command {
    constructor(name, action, requireAdmin) {
        this.name = name;
        this.action = action;
        this.requireAdmin = requireAdmin;
    }
    execute(player, message) {
        if (!this.requireAdmin) {
            this.action(player, message);
        }
        else if (checkForAdmin(player)) {
            this.action(player, message);
        }
        else {
            room.sendChat(`You are not allowed to use this command!`, player.id);
        }
    }
}
const whiteColor = "0xFFFFFF";
const redColor = "0xFF3C3C ";
let statisticCommand = new Command("!s", (player, message) => {
    room.sendAnnouncement(`Soon statistic will be implemented and u will see your statisctic!`, player.id, whiteColor, 'bold', 0);
}, false);

let errorCommand = new Command("error", (player, message) => {
    room.sendAnnouncement(`The ${message} command not found`, player.id, redColor, 'normal', 0);
}, false);

const commands = [statisticCommand, errorCommand];
room.setCustomStadium(mapNoPlayers);
room.setScoreLimit(4);
room.setTimeLimit(4);
function setMapNoPlayersFutsal() {
    if (currentMap == mapNoPlayers) return;
    room.stopGame();
    room.setCustomStadium(mapNoPlayers);
    currentMap = mapNoPlayers;
}
function setMap1v1Futsal() {
    if (currentMap == map1v1futsal) return;
    room.stopGame();
    room.setCustomStadium(map1v1futsal);
    currentMap = map1v1futsal;
}
function setMap4v4Futsal() {
    if (currentMap == map4v4futsal) return;
    room.stopGame();
    room.setCustomStadium(map4v4futsal);
    currentMap = map4v4futsal;
}

function updateMap() {
    var playersCount = room.getPlayerList().length;
    if (playersCount <= 1) {
        setMapNoPlayersFutsal();
    }
    else if (playersCount <= 5) {
        setMap1v1Futsal();
    }
    else {
        setMap4v4Futsal();
    }
}

function checkForAdmin(player) {
    return adminIds.includes(player.auth);
}
function updateAdmins(player) {
    if (checkForAdmin(player)) {
        room.setPlayerAdmin(player.id, true);
    }
}

function handleCommand(player, message) {
    let index = commands.findIndex(command => command.name == message);
    if (index != -1) {
        commands[index].execute(player, message);
    }
    else {
        errorCommand.execute(player, message);
    }
}

room.onPlayerJoin = function (player) {
    updateMap();
    updateAdmins(player);
    room.sendAnnouncement(`Ласкаво просимо на ЧСВ ELO 4 v 4. Скоро кімната буде дороблена і ми зможемо змагатися на пабліку за наші ело!`, player.id, '0x00FF00', 'bold', 0);
    console.log(`${player.name} --- ${player.auth}`);
}

room.onPlayerLeave = function (player) {
    updateMap();
}
room.onPlayerChat = function (player, message) {
    if (message[0] == '!') {
        console.log(`${player.name} execute command ${message}`);
        handleCommand(player, message);
        return false;
    }
}

function playerToSpec() {
    let players = room.getPlayerList();
    for (let i = 0; i < players.length; i++) {
        if (players[i].team == 1 || players[i].team == 2) {
            room.setPlayerTeam(players[i].id, 0);
        }
    }
}

function playerToTeam() {

}

room.onGameStop = function (player) {
    setTimeout(5000);
    playerToSpec(player);
    setTimeout(5000);
    console.log(room.getPlayerList())
}