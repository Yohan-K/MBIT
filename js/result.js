const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');

// 카카오 공유 코드
const kakaoShare = document.querySelector('.kakao_share');
Kakao.init('3fa0ace395a887e9d7f2373c5e3b2d25');

function sendLink() {
    let result_url = window.location.href;
Kakao.Link.createDefaultButton({
    container: '#CONTAINER_ID',
    objectType: 'feed',
    content: {
        title: '디저트 사진',
        description: '아메리카노, 빵, 케익',
        imageUrl:
            'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
            mobileWebUrl: 'https://developers.kakao.com',
            androidExecParams: 'test',
        },
    },
    social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
    },
    buttons: [
        {
            title: '웹으로 이동',
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
            },
        },
        {
            title: '앱으로 이동',
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
            },
        },
    ]
});
}
$(function (){
    let url = window.location.href
    let img = $('.result_img img').attr('src');

    $("meta[property='og\\:url']").attr('content', url);
    $("meta[property='og\\:image']").attr('content', img);
});

function copyUrl() {
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}

function sharefacebook() {
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

copyBtn.addEventListener('click', copyUrl);
facebookShare.addEventListener('click', sharefacebook);
kakaoShare.addEventListener('click', sendLink);
