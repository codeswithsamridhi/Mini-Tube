const videos = [
  { file: "sample1.mp4", title: "Sample Video 1" },
  { file: "sample2.mp4", title: "Sample Video 2" },
  { file: "sample3.mp4", title: "Sample Video 3" },
  { file: "sample4.mp4", title: "Sample Video 4" }
];

const videoList = document.getElementById("video-list");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";
  card.innerHTML = `
    <video controls src="videos/${video.file}"></video>
    <p>${video.title}</p>
  `;
  videoList.appendChild(card);
});