/* Main js - 게임로직 설정+ ui표시 및 값 분베 */
/* app.js(전투로직) */

/* gameData */
let gameData = {
    playTimeCounter: 0,
    /* 플레이타임 카운트  */
    minerCount: 1,
    /* 광부숫자 */
    totalMeso: 0,
    /* 총 메소 */
    totalScore: 0,
    /* 총 점수 */
    leftover: 0 /* 남은 적 게이지 받아줄 변수 */
};

/* audio - 음악 음파 아이콘 있으면 키고, 없으면 끄기*/
const $audiocontroller = document.querySelector('.audioCtrl'); /* 오디오 버튼 */
const $audioPlayer = document.querySelector('audio');

function audioOnOff() {
    $audiocontroller.addEventListener('click', function () {
        $audiocontroller.classList.toggle('muted'); /* 오디오가 mute면 켜기 */
        if ($audioPlayer.classList.contains('muted')) {
            $audioPlayer.pause();
            return;
        }
        $audioPlayer.play();
    });
}

/* timer - 시작후 1초씩 증가(+*/
const $playtime = document.querySelector('.playtime');
function playingTime() {
    gameData.playTimeCounter += 1;
    $playtime.textContent =
        gameData.playTimeCounter < 100 ? (gameData.playTimeCounter < 10 ? '00' + gameData.playTimeCounter : '0' + gameData.playTimeCounter) : gameData.playTimeCounter;
}

/* MESO - 5초마다 광부 1명당 500MESO */
const $meso = document.querySelector('.totalMeso');
function earningMeso() {
    /* 광부 숫자 */
    gameData.totalMeso += gameData.minerCount * 500;
    $meso.textContent =
        gameData.totalMeso < 10000 ? (gameData.totalMeso < 1000 ? '00' + gameData.totalMeso : '0' + gameData.totalMeso) : gameData.totalMeso;
}

/* 광부or요원 소환시 돈 깍기 */
function summonCrew() {
    /* 광부 및  */
    /* 광부 숫자 */
    if (gameData.totalMeso) {/* 소환시 메소가 모자라면 문구 띄워주기 */
    /* 돈이 모자라요~ */
    }
}

(function () {
    setInterval(playingTime, 1000);
    setInterval(earningMeso, 5000);
})();