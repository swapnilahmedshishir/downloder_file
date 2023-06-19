const linkFile = document.querySelector('#input_link_file');
const downllodeBtn = document.querySelector('.dwn_btn');

downllodeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    downllodeBtn.innerText = 'Downloding file....';
    fetchFile(linkFile.value);
});

function fetchFile(url) {
    fetch(url)
    .then(res => res.blob())
    .then(file =>{
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        console.log(tempUrl);
        URL.revokeObjectURL(tempUrl);
        downllodeBtn.innerText = 'Downloding file';

    }).catch(() => {
        downllodeBtn.innerText = 'Downloding file';
        alert('Failed to downlode file!')
    });
    
}


// video
const linkViedo = document.querySelector('#input_link_video');
const downllodeVideoBtn = document.querySelector('.dwn_vid_btn');

downllodeVideoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    downllodeVideoBtn.innerText = 'Downloding Video....';
    downloadVideo(linkViedo.value);
});


function downloadVideo(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url , true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var urlCreator = window.URL || window.webkitURL;
      var videoUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = videoUrl;
      tag.target = '_blank';
      tag.download = url.replace(/^.*[\\\/]/, '');
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.onerror = err => {
      alert('Failed to download video');
    };
    xhr.send();

    // console.log(url);
   
  }