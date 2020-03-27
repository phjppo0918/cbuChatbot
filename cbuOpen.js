function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    if(msg.indexOf("!도움")==0){
        replier.reply("!스터디: 현재 모집중인 스터디들을 리스팅합니다!\n\n !프로젝트: 현재 모집중인 프로젝트들을 리스팅합니다!\n\n!정왕날씨: 현재 정왕날씨를 알려줘요!");
    }else if(msg.indexOf("!스터디")==0){
        replier.reply("통계학 스터디 스터디원 모집 -- 광종님");
        replier.reply("자바 기초 스터디 스터디원 모집 -- 현준님");
        replier.reply("자바 스터디 원하시는 분들은 자바스터디 테스트 작성 후 저에게 제출!");


    }else if(msg.indexOf("!프로젝트")==0){
        replier.reply("모집중인 프로젝트가 없습니다 ㅠㅠ");
    }

    if(msg.indexOf("!정왕날씨")==0){
        msg = msg.trim();
        var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=정왕%20날씨");
        data = data.replace(/<[^>]+>/g,"");
        data = data.split("오늘의 날씨")[1];
        data = data.split("기상특보")[0];
        data = data.split("어제보다")[0];
        data = data.trim();
        replier.reply(data);
        }

}