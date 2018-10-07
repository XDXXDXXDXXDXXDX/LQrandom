(function creat1() {
    let td = document.getElementsByTagName('td');
    document.getElementById('create1').addEventListener('click', () => {
        let proContainer = newProfile();
        for(let i = 0; i < 50; i++) {
            td[i].innerHTML = proContainer[i];
        }
    });
})();

(function creat2() {
    let td = document.getElementsByTagName('td');
    document.getElementById('create2').addEventListener('click', () => {
        let varArr = newValue();
        for(let i = 50; i < 100; i++) {
            td[i].innerHTML = varArr[i - 50];
        }
    });
})();

document.getElementById('show-tip').addEventListener('click', () => {
    document.getElementsByClassName('study')[0].style.display = "block";
}); 

document.getElementById('close-tip').addEventListener('click', () => {
    document.getElementsByClassName('study')[0].style.display = "none";
}); 

//生成一组个人信息
function newProfile() {
    let proContainer = [];
    //生成十组数据存入数组中
    for(let i = 0; i < 10; i++) {
        let nameAndSex = getName();
        let isShenhu = getShenhu();
        let work = getWork();
        let mobile= getMobile();
    
        proContainer.push(nameAndSex[0], nameAndSex[1], isShenhu, work, mobile);
    }  
    return proContainer;  
};


// 生成随机姓名与性别
function getName(){
    let familyNames = new Array(
        "赵",    "钱",    "孙",    "李",    "周",    "吴",    "郑",    "王",    
        "蒋",    "沈",    "韩",    "杨",    "朱",    "秦",    "许",    "萧",
        "何",    "吕",    "张",    "孔",    "曹",    "魏",    "伍",    "余",  
        "陶",    "姜",    "谢",    "邹",    "柏",    "章",    "冯",    "陈",    
        "苏",    "潘",    "葛",    "范",    "彭",    "鲁",    "韦",    "黄",
        "昌",    "马",    "方",    "俞",    "任",    "袁",    "柳",
        "鲍",    "史",    "唐",    "费",    "岑",    "薛",    "雷",    "贺",    
        "倪",    "汤",    "滕",    "罗",    "毕",    "郝",    "傅",    "孟"         
        );//63个

    let givenBoyNames =  new Array(
        "嘉懿","煜城","懿轩","烨伟","苑博","伟泽","熠彤","鸿煊","博涛","烨霖","烨华","煜祺","智宸","正豪","昊然",
        "明杰","立诚","立轩","立辉","峻熙","弘文","熠彤","鸿煊","烨霖","哲瀚","鑫鹏","致远","俊驰","雨泽","烨磊",
        "晟睿","天佑","文昊","修洁","黎昕","远航","旭尧","鸿涛","伟祺","荣轩","越泽","浩宇","瑾瑜","皓轩","擎苍",
        "擎宇","志泽","睿渊","楷瑞","子轩","弘文","哲瀚","雨泽","鑫磊","修杰","伟诚","建辉","晋鹏","天磊","绍辉",
        "泽洋","明轩","健柏","鹏煊","昊强","伟宸","博超","君浩","子骞","明辉","鹏涛","炎彬","鹤轩","越彬","风华",
        "靖琪","明诚","高格","光华","国源","冠宇","晗昱","涵润","翰飞","翰海","昊乾","浩博","和安","弘博","宏恺",
        "鸿朗","华奥","华灿","嘉慕","坚秉","建明","金鑫","锦程","瑾瑜","晋鹏","经赋","景同","靖琪","君昊","俊明",
        "季同","开济","凯安","康成","乐语","力勤","良哲","理群","茂彦","敏博","明达","朋义","彭泽","鹏举","濮存",
        "溥心","璞瑜","浦泽","奇邃","祺祥","荣轩","锐达","睿慈","绍祺","圣杰","晟睿","思源","斯年","泰宁","天佑",
        "同巍","奕伟","祺温","文虹","向笛","心远","欣德","新翰","兴言","星阑","修为","旭尧","炫明","学真","雪风",
        "雅昶","阳曦","烨熠","英韶","永贞","咏德","宇寰","雨泽","玉韵","越彬","蕴和","哲彦","振海","正志","子晋",
    );//15*11=165个

    let givenGirlNames =  new Array(
        "雨灵","如凡","梦露","山彤","乐荷","梦寒","白莲","如波","冷安","翠琴","采梦","迎梦","友容","醉蝶","碧菡",
        "妙晴","书琴","翠曼","寻梅","翠安","惜梦","含烟","采文","元绿","凡梦","盼曼","雁菱","觅波","雅霜","尔容",
        "雁卉","安雁","盼秋","元冬","笑南","平文","从丹","小夏","念双","晓绿","盼晴","采珊","傲丝","夜春","雁梅",
        "凝梦","笑卉","翠桃","秋灵","南蕾","雁蓉","念珍","惜萍","听南","怜晴","涵菱","忆文","雨珍","向梦","紫南",
        "南琴","凝芙","醉冬","问寒","芷荷","傲薇","冬灵","平卉","依萱","飞兰","诗蕊","雅彤","巧蕊","代曼","雪卉",
        "思萱","语海","凌柏","念真","夜玉","书蕾","千柔","翠芙","幻波","谷波","代芹","翠绿","幻巧","依波","孤丹",
        "芷蝶","梦竹","紫真","紫文","以旋","书文","向薇","曼云","白竹","代玉","山柏","诗珊","诗霜","书兰","笑阳",
        "友绿","怀绿","小玉","翠霜","海冬","向卉","芷珊","雁芙","之瑶","含灵","夏山","小凝","以珊","映冬","新晴",
        "问薇","梦蕊","含之","怜珊","涵柳","依霜","思菱","幻儿","诗双","夏兰","新筠","含芙","亦瑶","寒凝","谷蕊",
        "乐双","香薇","元瑶","初瑶","惜珊","书桃","书易","凝旋","小霜","元容","又夏","绮梅","书南","晓蓝","平萱",
        "代珊","静竹","迎海","白亦","觅露","绮山","冬萱","元灵","紫萱","采白","迎波","冰夏","灵寒","绮波","安寒",
    );//15*11=165个

    let i = Math.floor(Math.random() * 63);
    let familyName = familyNames[i];
    let givenName = "";
    let sex = "";
    let j = Math.random();
    let k = Math.floor(Math.random() * 165);
    if(j < 0.5) {  
        givenName = givenBoyNames[k];
        sex = "男";        
    }else{
        givenName = givenGirlNames[k];
        sex = "女";    
    }
    
    let name = familyName + givenName;
    return [name, sex];
};

//生成随机是否深户
function getShenhu() {  
    let isShenhu = "";
    let i = Math.random();
    if(i < 0.6){
        isShenhu = "深户";
    }else{
        isShenhu = "非深户";
    }
    return isShenhu;
};

//生成随机职业
function getWork() {  
    let work = "";
    let workList =  new Array(
        "会计","银行出纳员","经理","演员","导演","主持人","模特儿","歌手","医生","护士","兽医",
        "收票员","建筑师","土木工程师","学生","面包师","大厨","厨师","服务员","学生","学生",
        "商人","业务经理","接待员","工人","秘书","主管","打字员","律师","翻译者","设计师",
        "建筑工人","个体","木匠","电工","维修工程师","司机","医师","经理","教授","学生","学生",
        "学生","老师","理发师","美容师","发型师","药剂师","工程师","职员","售货员","作者","主编",
        "记者","摄影师","摄影记者","统计员"
    );//57个

    let i = Math.floor(Math.random() * 57);
    work = workList[i];

    return work;
};

//生成随机手机号
function getMobile() {     
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = Math.floor(10 * Math.random());
    var prefix = prefixArray[i];

    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    
    return prefix;
};

//生成一组分数
function newValue() {
    let varArr = [10, 12, 14, 16, 18, 20];//可能取的值
    let num = 0;
    let numArr = [];
    for(let i = 0; i < 50; i++){
        let j = Math.random();
        switch(true){
            case j < 0.166 : num = 10; break;
            case j < 0.332 : num = 12; break;
            case j < 0.5 : num = 14; break;
            case j < 0.666 : num = 16; break;
            case j < 0.833 : num = 18; break;
            default : num = 20; break;  
        }
        numArr.push(num);
    }
    return numArr;
}




