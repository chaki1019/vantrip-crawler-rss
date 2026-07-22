import { Mesh } from "../type";

export function mesh2ToMesh3(mesh2: Mesh): Mesh[] {
  const result: Mesh[] = [];

  const [
    minLon,
    maxLon,
    minLat,
    maxLat
  ] = mesh2.bbox;


  // 3次メッシュの幅
  const lonStep = (maxLon - minLon) / 10;
  const latStep = (maxLat - minLat) / 10;


  for (let row = 0; row < 10; row++) {

    for (let col = 0; col < 10; col++) {

      const code = mesh2.code + `${row}${col}`;

      const meshMinLon = minLon + col * lonStep;
      const meshMaxLon = meshMinLon + lonStep;

      const meshMinLat = minLat + row * latStep;
      const meshMaxLat = meshMinLat + latStep;


      result.push({
        code,
        bbox: [
          Number(meshMinLon.toFixed(6)),
          Number(meshMaxLon.toFixed(6)),
          Number(meshMinLat.toFixed(6)),
          Number(meshMaxLat.toFixed(6))
        ]
      });
    }
  }

  return result;
}

export function progress(current: number, total: number): string {
  const width = total.toString().length;
  return `[${current.toString().padStart(width, " ")}/${total}]`
}