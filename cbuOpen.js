function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    if(msg.indexOf("!도움")==0){
        replier.reply("!스터디: 현재 모집중인 스터디들을 리스팅합니다!\n\n !프로젝트: 현재 모집중인 프로젝트들을 리스팅합니다!");
    }else if(msg.indexOf("!스터디")==0){
        replier.reply("통계학 스터디 스터디원 모집 -- 광종님");
        replier.reply("자바 기초 스터디 스터디원 모집 -- 현준님");
        replier.reply("C++ 기초 스터디 스터디원 모집 -- 원택님");
        replier.reply("파이썬 기초 스터디 스터디원 모집 -- 현정님");

    }else if(msg.indexOf("!프로젝트")==0){
        replier.reply("모집중인 프로젝트가 없습니다 ㅠㅠ");
    }

}