// map.js

// 지도 생성 (CRS.Simple은 픽셀 기반 지도에 사용)
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2
  });
  
  const bounds = [[0, 0], [1000, 1000]]; // 이미지 크기에 맞게 조절 (예: 1000x1000)
  
  // 초기 이미지 오버레이 및 마커 배열
  let imageOverlay;
  let markers = [];
  
  function loadFloor(floorNum) {
    // 이전 이미지, 마커 제거
    if (imageOverlay) map.removeLayer(imageOverlay);
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
  
    // 이미지 경로
    const imageUrl = `assets/floor${floorNum}.png`;
  
    // 이미지 오버레이 추가
    imageOverlay = L.imageOverlay(imageUrl, bounds).addTo(map);
    map.fitBounds(bounds);
  
    // 층별 마커 예시 (여기서 수정 가능)
    if (floorNum === "1") {
      const m = L.marker([400, 500]).addTo(map).bindPopup("2학년 1반");
      markers.push(m);
    } else if (floorNum === "2") {
      const m = L.marker([600, 300]).addTo(map).bindPopup("교무실");
      markers.push(m);
    } else if (floorNum === "3") {
      const m = L.marker([700, 700]).addTo(map).bindPopup("컴퓨터실");
      markers.push(m);
    }
  }
  
  // 처음엔 1층 로딩
  loadFloor("1");
  
  // 셀렉트 박스 변경 이벤트
  document.getElementById("floorSelector").addEventListener("change", function (e) {
    loadFloor(e.target.value);
  });
  