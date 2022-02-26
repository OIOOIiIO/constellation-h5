var mask = function(){
  html2canvas(document.getElementById("middle-view"),{useCORS:true}).then(function(canvas) {
    var img =  document.createElement("img");
    img.src =  canvas.toDataURL();
    img.style.width = 100 + '%';
    document.getElementById('mask').appendChild(img);
  });
}
window.onload = function(){
    document.getElementById('loading').classList.add("loading-end");
    document.getElementById('js-bg-music').classList.add('play');
    //chome内 第一次音乐播放需要用户操作点击之后才能发生
    //待修复
    document.getElementById('js-bg-music').play();
    mask();
};

//预加载图片
function preloadimages(arr){
  var newimages=[]
  var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
  for (var i=0; i<arr.length; i++){
      newimages[i]=new Image()
      newimages[i].src=arr[i]
  }
}
preloadimages(['https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p01.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p02.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p03.jpg',
'https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p04.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p05.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p06.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p07.jpg',
'https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p08.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p09.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p10.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p11.jpg',
'https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p12.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p13.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p14.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p15.jpg',
'https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p16.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p17.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p18.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p19.jpg',
'https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p20.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p21.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p22.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p23.jpg',
'https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p24.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p25.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p26.jpg','https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p27.jpg',
'https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p28.jpg','https://oiooiiio.github.io/constellation-h5/img/1.png','https://oiooiiio.github.io/constellation-h5/img/2.png','https://oiooiiio.github.io/constellation-h5/img/3.png','https://oiooiiio.github.io/constellation-h5/img/4.png',
]);

//生成结果时的遮罩


var identity1 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p01.jpg');")
  document.getElementById('con-name').innerText = '角木蛟';
  document.getElementById('introduce').innerText = '是一名来自东方的剑士，剑法犀利，器刃暗含青光，他穷其一生都在高耸入云的森林中探寻古老的自然之力。在日复一日刻苦的修行中，参天古树的灵气进入到他的体内，于是他获得木之仙术，便飞升化作东方天空中巨龙之角。';
  document.getElementById('id-introduce').innerText = '你一定是自制力非常强的“别人家孩子”。虽然在交往中有点大大咧咧，但是做事情的时候绝对非常认真严谨。所以你今日的成功都要归功于你的勤奋努力与强大的自制力。';
}
var identity2 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p02.jpg');")
  document.getElementById('con-name').innerText = '亢金龙';
  document.getElementById('introduce').innerText = '金出生于传统的炼金世家，他的父母给予他厚望，给他取名为金。金自幼就在父母的培养下悉心钻研炼金术，他极具天赋，掌握了一套属于自己的方法，然而人们渐渐发现他的炼金术更近乎于一种仙术。有一天他突然纵身跃入面前的火炉，须臾，一条金龙腾空而起，冲上云霄，昔日痴狂的炼金术士已然成为东方天空的神明。';
  document.getElementById('id-introduce').innerText = '你的学习和工作时常要求你拥有聪明的头脑和果敢的决断能力，恰好你在这方面的能力可以让你游刃有余。但是在人际交往这方面你还需要注意多倾听他人的声音。';
}
var identity3 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p03.jpg');")
  document.getElementById('con-name').innerText = '氐土貉';
  document.getElementById('introduce').innerText = '氐的身世一直是个迷，有人说他生于土石，又归于土石，只是向往人间的生活才修炼出人形，只可惜他不能拥有像人类一样能够行走的双腿。上天被他的精神所感动，让它成为东方天空中的一个星宿，守望着世间最繁华的都市。';
  document.getElementById('id-introduce').innerText = '不管在生活中还是工作中，你都是一个非常稳重的人，虽然有的时候会给人一种严肃的感觉，但是这种沉稳、遇事不慌的性格也让你的朋友更加依赖你。';
}
var identity4 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p04.jpg');")
  document.getElementById('con-name').innerHTML = "<span style = 'color: white'>房日兔</span>";
  document.getElementById('introduce').innerText = '房所在的部落是一个很古老的族群，她是族长的女儿。邪恶的河神要房作为祭品才肯平息水灾。为了全族人的安危，还是一个小女孩的房毅然走上祭坛。在洪水即将吞没她的时候，天神救了她，将她变成东方巨龙的心房，并让她的族人向南迁徙，寻求新的家园，而房则在天空中指引着族人。';
  document.getElementById('id-introduce').innerText = '不管年龄多大，你总能像小孩子一样活泼可爱，周围的朋友会因为你的活跃而被带动起来。聚会时的你就是一整支活跃气氛的啦啦队。 ';
}
var identity5 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p05.jpg');")
  document.getElementById('con-name').innerText = '心月狐';
  document.getElementById('introduce').innerText = '心是一位传奇而又美丽的女子，她有一个从小就相识的朋友——一只硕大的白狐。虽然在人类世界里的她略显孤寂，但是有了白狐的陪伴，她的修行之路也不乏欢乐。心和她的白狐汲取了月亮的力量，成为东方天空的神明，借助皎洁的月光，她得以和白狐在草地上嬉戏；月光一散，她就飞回天上去了。';
  document.getElementById('id-introduce').innerText = '从小到大，天真和淳朴从来都是你最显著的性格，无论外界环境有多么复杂，你总能保持内心的纯洁不被污染。这种与生俱来的天真纯净真的很让人羡慕呢！';
}
var identity6 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p06.jpg');")
  document.getElementById('con-name').innerText = '尾火虎';
  document.getElementById('introduce').innerText = '相传人们为了得到火之仙术聚集在东夷山进行修炼，高温和火焰让东夷山变得寸草不生。性格急躁而毫无耐心的尾并不是这些人中最出色的，反而因为恶劣的环境而变得狂暴无常。也恰恰因为这一点，他阴差阳错地感悟到了火之仙术，成为东方巨龙之尾。然而修行上的不足让他成为整个东方星空最薄弱的一环。';
  document.getElementById('id-introduce').innerText = '你的好奇心很强，但是做事情总是改不了“三分钟热度”的毛病，若是能够克服这一缺点，把手头的这件事坚持下来，你会发现一个全新的自己！';
}
var identity7 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p07.jpg');")
  document.getElementById('con-name').innerText = '箕水豹';
  document.getElementById('introduce').innerText = '箕这个人性格潇洒不羁，仙术的习得仿佛全靠天性。他能够熟练地驾驭风和雨，也就是所谓的“御风而行”。后来，他被上天选中，成为东方巨龙尾巴煽动掀起的旋风，飘忽无影，来去无踪。';
  document.getElementById('id-introduce').innerText = '性格不羁的你喜欢自由，在日常生活中，你是一个潇洒飘逸的你，不太喜欢各种条条框框的拘束。“我劝天公重抖擞，不拘一格降人才”应该说的就是你吧！';
}
var identity8 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p08.jpg');")
  document.getElementById('con-name').innerText = '斗木獬';
  document.getElementById('introduce').innerText = '斗绝对是驻守北方寒地的优秀将领，他为人刚正不阿，判决客观公正。他手持双剑戟，武艺超群，善用兵法，带领着他的军队保卫着北方的边境。他死后，意志和精神化作星辰，一直指向北方，这样，深夜行军的士兵便不会迷失方向。';
  document.getElementById('id-introduce').innerText = '你非常重视公平公正，对待任何事情总能够从客观的角度观察。客观公正仿佛是你衡量世界的一把标尺，无论是自己还是别人，你都希望能够更加公平地被对待。';
}
var identity9 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p09.jpg');")
  document.getElementById('con-name').innerText = '牛金牛';
  document.getElementById('introduce').innerText = '牛是一位善于防御的将士，他一手持巨大盾牌，一手持千斤重锤，面对敌人的进攻丝毫不漏怯色，是值得战友信赖和托付的大将。后来，上天被他的忠勇所打动，让他成为北方天空玄武的一员。';
  document.getElementById('id-introduce').innerText = '你喜欢信任他人，对待朋友可谓是忠诚无悔。你是一个可以百分百完全信赖的人，所以，你的朋友和同事对于交给你完成的事情都非常放心。';
}
var identity10 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p10.jpg');")
  document.getElementById('con-name').innerText = '女土蝠';
  document.getElementById('introduce').innerText = '女是所有北方女兵的将领，她功夫卓绝，身手不凡，一把长戟在手，所向披靡。军营中她不仅操练士兵，亲身教学；还关心苦寒中士兵的生活，为下属所爱戴。后来，上天选中她作为北方天空玄武的一个星宿，她的故事也开始在北方大地流传。';
  document.getElementById('id-introduce').innerText = '你是一个内敛含蓄的人，有很多时候不知道该如何表达自己的内心，就用实际行动来证明。你常常默默无闻照顾亲人朋友，善于用行动感化他人。';
}
var identity11 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p11.jpg');")
  document.getElementById('con-name').innerText = '虚日鼠';
  document.getElementById('introduce').innerText = '由于北方连年战乱，许多村庄都变成了废墟，将士平民死伤无数。他们的怨气和幽魂汇聚成人形，人们给他取名为虚。他拿着一面破旧的军旗，在北方的深山里游荡。随着幽魂的聚集，虚的力量也越来越大，终于他飞到天空，成为了北方夜空中一个星宿。';
  document.getElementById('id-introduce').innerText = '你在生活中偶尔会缺少自信，其实你是一个能力蛮强的人，只不过胆怯和不自信的想法让你难以前进。很多时候如果你大胆地迈出第一步，你会发现原来自己那么棒！';
}
var identity12 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p12.jpg');")
  document.getElementById('con-name').innerHTML = "<span style = 'color: white'>危月燕</span>";
  document.getElementById('introduce').innerText = '危是毕的妹妹，姐妹二人在战火中走散，毕逃向了西方，而危则被北方军队所救。军队中的士兵教危做纸鸢，她做的纸鸢既精巧，又好看。夜晚，危做的纸鸢在月亮的照耀下飞了起来。自那以后，她经常在月光明亮的夜晚放飞纸鸢来传递军情，成为北方军队重要的信使。然而在一次放飞纸鸢的时候，她被敌人的箭矢射中，上天便将她变成北方天空中的星宿。';
  document.getElementById('id-introduce').innerText = '你是一个不折不扣的完美主义者，无论工作还是学习，你都想做到尽善尽美，但是这样常常会让你感到精疲力竭。偶尔的放松对于你来说应该是个不错的选择。';
}
var identity13 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p13.jpg');")
  document.getElementById('con-name').innerText = '室火猪';
  document.getElementById('introduce').innerText = '室出生于名门望族，然而他自幼酷爱习武，励志成为戍守北方边关的将士。成年以后，他放弃了荣华富贵的生活，应征入伍。他手持双刀，骁勇善战，在前线屡立战功，成为了一名赫赫有名的大将。后来，这位武将被上天选中，成为北方天空玄武的一个星宿，始终镇守着这一方大地。';
  document.getElementById('id-introduce').innerText = '你比较保守，喜欢稳定，性格也比较慢热。但是做事情一步一个脚印的你也因此更加扎实和稳重。当然，你也应该偶尔尝试一些新鲜的东西，调剂一下生活。';
}
var identity14 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p14.jpg');")
  document.getElementById('con-name').innerText = '壁水貐';
  document.getElementById('introduce').innerText = '壁是一位善于建造防御工事的匠人，她将法术注入到制作的防御机械中，能够使得这些器械的威力大幅度提升。在一次敌人的大规模进攻中，为了保护城池，她施展法术制造了一个巨大的屏障，虽然成功地阻挡了敌军的进攻，但是自己也力竭而亡。上天将她变成北方玄武的最后一个星宿，让她的温和始终保护着这片土地。';
  document.getElementById('id-introduce').innerText = '你一直都是一个温和宽厚的人，和你相处过的朋友都觉得你是贴心的小棉袄。但是过于随和反而会对你造成一些困扰，所以交往中也要学会顾及一下自己的感受呀！';
}
var identity15 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p15.jpg');")
  document.getElementById('con-name').innerText = '奎木狼';
  document.getElementById('introduce').innerText = '奎是西方神奇大地上主管草木生发的精灵。他所到之处枯木逢春，草长莺飞，一片生机盎然。后来他飞升到天上成为西方天空白虎的首宿，它象征着生机活力，在西方静谧的星空熠熠生辉。';
  document.getElementById('id-introduce').innerText = '你听到最多的评价一定是善解人意，这让你在人际交往中如鱼得水，懂得换位思考的你时常是团队中联络各方的那个人。';
}
var identity16 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p16.jpg');")
  document.getElementById('con-name').innerText = '娄金狗';
  document.getElementById('introduce').innerText = '娄这个小精灵能够将大群大群的小动物聚集在一起，所以她出现的时候往往能够引起这个地方畜牧业的发达。人们对她的敬仰让她的力量不断增强，终于飞升到西方天空中，成为一个守护畜牧和动物的星宿，后来的人们常常仰望西方的星空向她祈求祝福。';
  document.getElementById('id-introduce').innerText = '在一段交往当中，你总是愿意做那个主动的人，尤其是恋爱时，你可以勇敢地追求自己喜欢的人。除此之外，你还颇受小动物的欢迎，对猫猫狗狗们有一种莫名的亲切感。';
}
var identity17 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p17.jpg');")
  document.getElementById('con-name').innerText = '胃土雉';
  document.getElementById('introduce').innerText = '胃是一个主管仓禀和五谷精灵，他可以影响这一年粮食收成。所以，人们对于他的敬仰一点也不亚于娄，而且他更加的慷慨和善良，几乎有求必应。于是，上天让这个善良的小精灵成为西方白虎的胃，依旧象征着饱腹和美好。';
  document.getElementById('id-introduce').innerText = '你性格中善良友好的品质是一把双刃剑，既能够为你带来广泛的人际圈子也容易让你因此被利用。所以一定要警惕一些，不能让你的善良成为他人伤害你的借口。';
}
var identity18 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p18.jpg');")
  document.getElementById('con-name').innerText = '昴日鸡';
  document.getElementById('introduce').innerText = '昴是一个性情古怪的小精灵，他时常出现在人们的家中，在人们梳妆打扮的时候碎碎叨叨地对今日的妆发穿着品头论足。但是有时候他对于装扮的执拗会给人们带来别样的美感。后来，他成为了西方天空中的一个星宿，他的样子就像梳起来的发髻一样。';
  document.getElementById('id-introduce').innerText = '你是一个一旦你确定了目标就会坚持不懈将之完成的人，但是有些时候会因此而显得倔强固执。如果学会适当从牛角尖中走出来，也许会发现不一样的人生视角！';
}
var identity19 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p19.jpg');")
  document.getElementById('con-name').innerHTML = "<span style = 'color: white'>毕月乌</span>";
  document.getElementById('introduce').innerText = '毕的父母在战火中丧生，妹妹也和她失散，她只身一人逃往西方。然而在西方这片神奇的土地上仿佛并没有她的落脚之处，身为异乡客的她在这里显得格格不入。上天眷顾这一对可怜的姐妹，让毕化身为月之精灵，飞上天空与妹妹隔空相望。';
  document.getElementById('id-introduce').innerText = '如果用高傲冷艳这个词来形容你实在是再合适不过了。和你交往的朋友都会觉得你是一个虽然高冷但是又非常酷的人。';
}
var identity20 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p20.jpg');")
  document.getElementById('con-name').innerText = '觜火猴';
  document.getElementById('introduce').innerText = '从来没有人见到过觜的身影，但是他却在人们的身边快乐地忙碌着。他热衷于将相互喜欢的人拉得更近，他就存在于两个相爱的人四目相对的那一刻。人们都相信他的存在，认为他可以带来爱情。后来他飞到天上，成为西方白虎的一个星宿，这样他就能够见证更多了爱情故事了。';
  document.getElementById('id-introduce').innerText = '你是一个十足的恋爱脑，一旦有了喜欢的人就会奋不顾身地谈恋爱，世间所有的事情都没有你爱的人重要。但是这样的你很容易在恋情中受伤，所以要学会保护自己呀！';
}
var identity21 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p21.jpg');")
  document.getElementById('con-name').innerText = '参水猿';
  document.getElementById('introduce').innerText = '参是西方神奇之地上掌管水元素的精灵，正是因为有了水之源泉，西方大地上才充满了各种奇珍异宝。为了更好地保护这片地方，参离开了他居住多年的泉水，飞到天空中成为西方白虎的最后一个星宿，一直守护和保佑着这片神奇的土地。';
  document.getElementById('id-introduce').innerText = '你是一个非常注重仪容仪表的人，同时骨子里的优雅、干练让你不同于常人。';
}
var identity22 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p22.jpg');")
  document.getElementById('con-name').innerHTML = "<span style = 'color: white'>井木犴</span>";
  document.getElementById('introduce').innerText = '井是南方部落一个很普通的女孩，因为失足而掉落悬崖，从而突然获得了来自深渊的神秘力量。在即将坠落的一瞬间，她飞升成为南方天空朱雀的首宿，代表了来自南方沉静而又深邃的力量。';
  document.getElementById('id-introduce').innerText = '你是一个沉静的人，你总是那个在热闹人群中保持安静的人。而且你有很多颇富远见的想法，这种与生俱来的深邃远超同龄人。';
}
var identity23 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p23.jpg');")
  document.getElementById('con-name').innerText = '鬼金羊';
  document.getElementById('introduce').innerText = '鬼其实是一种类似虚无的元气，是一种看不见也摸不到的物质，他经常徘徊于闹市之间，和人们一同分享着人世的繁华。他以惊吓人们为乐，喜欢做一些小的恶作剧吓唬街上的行人。后来他飞升到南方的天空，象征着惊吓与恐怖。';
  document.getElementById('id-introduce').innerText = '你是一个清高淡泊之人，颇有“出淤泥而不染，濯清涟而不妖”的风范。虽然你会因此而显得鹤立鸡群，但是这并不妨碍你高洁的心境。';
}
var identity24 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p24.jpg');")
  document.getElementById('con-name').innerText = '柳土獐';
  document.getElementById('introduce').innerText = '相传，南方部族中有三兄弟，他们能与动物沟通交流。大哥柳可以与獐对话，獐青口獠牙，柳却能与之相处甚欢。后来，天神将他作为南方朱雀之喙。';
  document.getElementById('id-introduce').innerText = '为人憨厚老实的你常常会因此受到欺负，但是你也会得到好机会，这也许就是所谓的“大智若愚”吧！';
}
var identity25 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p25.jpg');")
  document.getElementById('con-name').innerText = '星日马';
  document.getElementById('introduce').innerText = '星在三兄弟中排行老二，性格顽皮乖张，它能听懂马的嘶鸣并与之交流，喜欢在荒野骑马飞驰。他的坐骑是一匹白色的骏马，天神让他和他的坐骑一起飞升，成为南方朱雀之颈。';
  document.getElementById('id-introduce').innerText = '你天性顽皮好动，小时候的你一定调皮捣蛋，让家长头疼不已，长大以后玩心依旧不减，活到老，“玩到老”。';
}
var identity26 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p26.jpg');")
  document.getElementById('con-name').innerText = '张月鹿';
  document.getElementById('introduce').innerText = '张是柳和星的弟弟，他为人热情豪爽，好交友待客，并且能够和鹿交流。人们总能看见他身边那头体型硕大的雄鹿。他和哥哥们一起飞升到南方的天空，成为朱雀身体和翅膀相连的部分。';
  document.getElementById('id-introduce').innerText = '认识你的人都说你开朗热情，性格很好。你喜欢和朋友一起聚会聊天，把酒言欢，你的热情总能感染到周围的人。';
}
var identity27 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p27.jpg');")
  document.getElementById('con-name').innerText = '翼火蛇';
  document.getElementById('introduce').innerText = '翼是南方密林中的一位巫师，她能够通过观察树叶颜色的变化来占卜。凭借着精确预知未来的感知能力，她飞升到南方天空，变成朱雀之翼。';
  document.getElementById('id-introduce').innerText = '你有很神奇的第六感，或是能够做预知未来的梦，或是能够对正在发生的事情有特殊的感觉。';
}
var identity28 = function(){
  document.getElementById('main-pic').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p28.jpg');")
  document.getElementById('con-name').innerText = '轸水蚓';
  document.getElementById('introduce').innerText = '轸是南方的一位美人，天生丽质却遭同族人的嫉妒，终生郁郁寡欢。她被同伴推入汹涌的江流中溺水而死。天神让她化身为南方天空朱雀之尾，有悲痛之意。';
  document.getElementById('id-introduce').innerText = '日常生活中的你像“林妹妹”一样多愁善感，你的敏感多思让你对生活有了不同寻常的感悟。';
}

//特殊按钮点击特效
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
var classname = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}
//特殊按钮点击特效 结束


// 禁止微信浏览器调整字体大小
(function() {
 
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      handleFontSize();
  } else {
      if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
      } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", handleFontSize);
          document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
  }
  function handleFontSize() {
      // 设置网页字体为默认大小
      WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
      // 重写设置网页字体大小的事件
      WeixinJSBridge.on('menu:setfont', function() {
          WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
      });
  }
})();

 // 禁止双击放大
 var lastTouchEnd = 0;
 document.documentElement.addEventListener('touchend', function (event) {
     var now = Date.now();
     if (now - lastTouchEnd <= 300) {
         event.preventDefault();
     }
     lastTouchEnd = now;
 }, false);
 // 禁止双指放大
 document.documentElement.addEventListener('touchstart', function (event) {
     if (event.touches.length > 1) {
         event.preventDefault();
     }
 }, false);

/*控制背景音乐暂停*/
 var ctl = document.getElementById("js-music-ctl");
 ctl.addEventListener("click", function (){
   var audio = document.getElementById('js-bg-music');
   if(this.classList.contains('play')){
     this.classList.remove('play')
     audio.pause();
   }
   else{
     this.classList.add('play')
     audio.play();
   }
},false);
/*控制音乐暂停结束*/


// 点击打开窗户动画事件

function optShow(){
  //第一道题目出现
  document.getElementById('subject').setAttribute('class','que-text-show');
  document.getElementById('subject').setAttribute('style','visibility: visible;');
  //音乐切换
  setTimeout(function(){
    document.getElementById('js-music-ctl').classList.remove('play');
    document.getElementById('js-bg-music').pause();
    document.getElementById('js-que-music').play();
  },1000);
  //移除题目出现特效为下一道题出现做准备
  document.getElementById('subject').addEventListener('animationend',function(){document.getElementById('subject').classList.remove('que-text-show');});
}
function openWindow(){
  document.getElementById('win-L').className = 'win-open-left';
  document.getElementById('win-R').className = 'win-open-right';
  document.getElementById('open-window').setAttribute('style','visibility: hidden;');
  document.getElementById('win-L').addEventListener('animationend',optShow);
  //题目更换就添加出场特效
  document.getElementById('subject').addEventListener('DOMNodeInserted',function(){
    document.getElementById('subject').classList.add('que-text-show');
  });
}
document.getElementById('open-window').addEventListener('click',openWindow,false);

//截取特定块，生成截图
function maskshow(){
  document.getElementById('mask').style.visibility = 'visible';
  document.getElementById('mask').classList.add('mask-show');
}
function takeScreenshot() {
  setTimeout(function(){ 
    document.getElementById('creat-button').setAttribute('style','visibility: hidden;');
    document.getElementById('js-bg-music').pause();
    document.getElementById('js-bg-music').currentTime = 0
  },600);
  document.getElementById('win-L').removeEventListener('animationend',optShow);
  document.getElementById('win-L').className = 'win-close-left';
  document.getElementById('win-R').className = 'win-close-right';
  document.getElementById('win-L').addEventListener('animationend',maskshow);
  html2canvas(document.getElementById("id-pic-2"),{useCORS:true}).then(function(canvas) {
    document.getElementById('id-pic-blank').classList.add('id-pic-blank-show');
    document.getElementById('id-pic-blank').setAttribute('style','visibility: visible;')

    setTimeout(function(){
    var img =  document.createElement("img");
    img.id = 'id-pic-img';
    img.src =  canvas.toDataURL();
    img.style.width = 100 + '%';

    var myp = document.getElementById('id-pic-blank'); 
    myp.appendChild(img);
    
    // document.getElementById("download").setAttribute("href",canvas.toDataURL());
    // document.getElementById("download").click();
    // console.log(canvas.toDataURL()); 
    // console.log(document.getElementById("download"));
    },700)

  }); 
}
document.getElementById('creat-button').addEventListener('click',takeScreenshot);

function again(){
  document.getElementById('bg-sky-1').classList.remove('sky-move-in');
  document.getElementById('bg-sky-2').classList.remove('sky-move-in');
  document.getElementById('bg-sky-3').classList.remove('sky-move-in');
  document.getElementById('bg-sky-4').classList.remove('sky-move-in');
  document.getElementById('bg-sky-2').classList.remove('sky-move-out');
  document.getElementById('bg-sky-3').classList.remove('sky-move-out');
  document.getElementById('bg-sky-4').classList.remove('sky-move-out');
  document.getElementById('bg-sky-5').classList.remove('sky-move-out');
  document.getElementById('id-pic-blank').classList.remove('id-pic-blank-show');
  document.getElementById('id-pic-blank').setAttribute('style','visibility: hidden;');
  document.getElementById('id-pic-blank').removeChild(document.getElementById('id-pic-img'));
  document.getElementById('constellation-img').setAttribute('style',"");
  document.getElementById('constellation-img').classList.remove('constellation-show');
  document.getElementById('win-L').removeEventListener('animationend',maskshow);
  document.getElementById('mask').style.visibility = 'hidden';
  document.getElementById('mask').classList.remove('mask-show');
  openWindow();
  setTimeout(function(){  document.getElementById('subject').innerHTML = " <span id='que'>听一段音乐，<br/>你脑海中浮现了哪种景象?</span><table class='option'><tbody><tr><td class='option-left option-top option-1'>A.<span id='option-1-A'>夕阳西下</span></td><td class='option-right option-top option-1'>B.<span id='option-1-B'>清泉涓涓</span></td></tr><tr><td class='option-left option-bottom option-1'>C.<span id='option-1-C'>雪夜山林</span></td><td class='option-right option-bottom option-1'>D.<span id='option-1-D'>蓝天白鸽</span></td></tr> </tbody></table>";
  Option();},1000);
  
}
document.getElementById('again-button').addEventListener('click',again);

/*题目选项逻辑 开始*/
// var subject = document.getElementById('subject')
// var opt1A = document.getElementById('option-1-A');
// var opt1B = document.getElementById('option-1-B');
// var opt1C = document.getElementById('option-1-C');
// var opt1D = document.getElementById('option-1-D');
// opt1A.addEventListener('click',function(){
//   subject.innerHTML = "选择一个你最喜欢的图形？";
// });
// opt1B.addEventListener('click',function(){
//   subject.innerHTML = "选择一个你最喜欢的图形？";
// });
// opt1C.addEventListener('click',function(){
//   subject.innerHTML = "选择一个你最喜欢的图形？";
// });
// opt1D.addEventListener('click',function(){
//   subject.innerHTML = "选择一个你最喜欢的图形？";
// });
/*因为选项id变更 不同题目的选项事件不能同时监听*/

//存在一个问题  必须在出现动画结束后才能点击
var Option = function(){
  var optionTwo = function(){
    document.getElementById('bg-sky-3').classList.add('sky-move-in');
    document.getElementById('bg-sky-4').classList.add('sky-move-out');
    document.getElementById('subject').innerHTML = "<span id='que' style='color:white;'>以下四种事物，<br/>你最喜欢哪个？</span><table class='option' style='color:white;'><tbody><tr><td class='option-left option-top'>A.<span id='option-3-A'>春天的草</span></td><td class='option-right option-top'>B.<span id='option-3-B'>夏天的雨</span></td></tr><tr><td class='option-left option-bottom'>C.<span id='option-3-C'>秋天的风</span></td><td class='option-right option-bottom'>D.<span id='option-3-D'>冬天的雪</span></td></tr> </tbody></table>";
    document.getElementById('option-3-A').addEventListener('click',function(){
      document.getElementById('bg-sky-2').classList.add('sky-move-in');
      document.getElementById('bg-sky-3').classList.add('sky-move-out');
      document.getElementById('que').innerHTML = "日常生活中你最在意自己或他人的哪项细节？";
      document.getElementById('option-3-A').innerText = "是否有好的衣品";
      document.getElementById('option-3-B').innerText = "手指甲是否干净";
      document.getElementById('option-3-C').innerText = "发型是否好看";
      document.getElementById('option-3-D').innerText = "有没有好闻的气味";
      document.getElementById('option-3-A').id = 'option-4-A';
      document.getElementById('option-3-B').id = 'option-4-B';
      document.getElementById('option-3-C').id = 'option-4-C';
      document.getElementById('option-3-D').id = 'option-4-D';
      document.getElementById('option-4-A').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最想获得哪一项技能？";
        document.getElementById('option-4-A').innerText = '会玩滑板';
        document.getElementById('option-4-B').innerText = '超群画技';
        document.getElementById('option-4-C').innerText = '迷人声线';
        document.getElementById('option-4-D').innerText = '穿衣有品';
        document.getElementById('option-4-A').id = 'option-6-A';
        document.getElementById('option-4-B').id = 'option-6-B';
        document.getElementById('option-4-C').id = 'option-6-C';
        document.getElementById('option-4-D').id = 'option-6-D';
        document.getElementById('option-6-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p02.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity2();
        });
        document.getElementById('option-6-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十一号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p21.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity21();
        });
        document.getElementById('option-6-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十四号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p24.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity24();
        });
        document.getElementById('option-6-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十一号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p11.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity11();
        });
      });
      document.getElementById('option-4-B').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最喜欢的服饰单品是哪一个？";
        document.getElementById('option-4-A').innerText = '衬衣';
        document.getElementById('option-4-B').innerText = '夹克';
        document.getElementById('option-4-C').innerText = '鞋子';
        document.getElementById('option-4-D').innerText = '披风';
        document.getElementById('option-4-B').id = 'option-7-B';
        document.getElementById('option-4-A').id = 'option-7-A';
        document.getElementById('option-4-C').id = 'option-7-C';
        document.getElementById('option-4-D').id = 'option-7-D';
        document.getElementById('option-7-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p03.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity3();
        });
        document.getElementById('option-7-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到一号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p01.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity1();
        });
        document.getElementById('option-7-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p25.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity25();
        });
        document.getElementById('option-7-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到七号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p07.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity7();
        });
      });
      document.getElementById('option-4-C').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "假如你回到小时候，最想玩什么游戏？";
        document.getElementById('option-4-A').innerText = '堆沙子';
        document.getElementById('option-4-B').innerText = '荡秋千';
        document.getElementById('option-4-C').innerText = '玩跷跷板';
        document.getElementById('option-4-D').innerText = '滑滑梯';
        document.getElementById('option-4-C').id = 'option-8-C';
        document.getElementById('option-4-A').id = 'option-8-A';
        document.getElementById('option-4-B').id = 'option-8-B';
        document.getElementById('option-4-D').id = 'option-8-D';
        document.getElementById('option-8-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到八号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p08.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity8();
        });
        document.getElementById('option-8-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十六号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p16.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity16();
        });
        document.getElementById('option-8-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到四号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p04.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity4();
        });
        document.getElementById('option-8-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p22.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity22();
        });
        
      });
      document.getElementById('option-4-D').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "如果结婚戒指不是钻石，你更希望是哪一种宝石？";
        document.getElementById('option-4-A').innerText = '祖母绿';
        document.getElementById('option-4-B').innerText = '蓝宝石';
        document.getElementById('option-4-C').innerText = '红宝石';
        document.getElementById('option-4-D').innerText = '水晶';
        document.getElementById('option-4-D').id = 'option-9-D';
        document.getElementById('option-4-A').id = 'option-9-A';
        document.getElementById('option-4-B').id = 'option-9-B';
        document.getElementById('option-4-C').id = 'option-9-C';
        document.getElementById('option-9-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p12.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity12();
        });
        document.getElementById('option-9-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p15.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity15();
        });
        document.getElementById('option-9-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到九号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p09.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity9();
        });
        document.getElementById('option-9-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p13.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity13();
        });
      });
    });
    document.getElementById('option-3-B').addEventListener('click',function(){
      document.getElementById('bg-sky-2').classList.add('sky-move-in');
      document.getElementById('bg-sky-3').classList.add('sky-move-out');
      document.getElementById('que').innerHTML = "旅游胜地的哪个特质最吸引你？";
      document.getElementById('option-3-A').innerText = '优美的风景';
      document.getElementById('option-3-B').innerText = '热情的民风';
      document.getElementById('option-3-C').innerText = '悠久的历史';
      document.getElementById('option-3-D').innerText = '浪漫的氛围';
      document.getElementById('option-3-A').id = 'option-5-A';
      document.getElementById('option-3-B').id = 'option-5-B';
      document.getElementById('option-3-C').id = 'option-5-C';
      document.getElementById('option-3-D').id = 'option-5-D';
      document.getElementById('option-5-A').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "如果结婚戒指不是钻石，你更希望是哪一种宝石？";
        document.getElementById('option-5-A').innerText = '祖母绿';
        document.getElementById('option-5-B').innerText = '蓝宝石';
        document.getElementById('option-5-C').innerText = '红宝石';
        document.getElementById('option-5-D').innerText = '水晶';
        document.getElementById('option-5-A').id = 'option-9-A';
        document.getElementById('option-5-B').id = 'option-9-B';
        document.getElementById('option-5-C').id = 'option-9-C';
        document.getElementById('option-5-D').id = 'option-9-D';
        document.getElementById('option-9-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p12.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity12();
        });
        document.getElementById('option-9-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p15.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity15();
        });
        document.getElementById('option-9-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到九号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p09.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity9();
        });
        document.getElementById('option-9-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p13.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity13();
        });
      });
      document.getElementById('option-5-B').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最喜欢的一种水果是？";
        document.getElementById('option-5-A').innerText = '苹果';
        document.getElementById('option-5-B').innerText = '山竹';
        document.getElementById('option-5-C').innerText = '石榴';
        document.getElementById('option-5-D').innerText = '甘蔗';
        document.getElementById('option-5-A').id = 'option-10-A';
        document.getElementById('option-5-B').id = 'option-10-B';
        document.getElementById('option-5-C').id = 'option-10-C';
        document.getElementById('option-5-D').id = 'option-10-D';
        document.getElementById('option-10-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十四号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p14.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity14();
        });
        document.getElementById('option-10-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p10.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity10();
        });
        document.getElementById('option-10-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到六号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p06.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity6();
        });
        document.getElementById('option-10-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十八号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p18.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity18();
        });
      });
      document.getElementById('option-5-C').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "如果你可以变身为一种小动物，<br/>你最想成为哪一种？";
        document.getElementById('option-5-A').innerText = '狗狗';
        document.getElementById('option-5-B').innerText = '兔兔';
        document.getElementById('option-5-C').innerText = '猫咪';
        document.getElementById('option-5-D').innerText = '天鹅';
        document.getElementById('option-5-A').id = 'option-11-A';
        document.getElementById('option-5-B').id = 'option-11-B';
        document.getElementById('option-5-C').id = 'option-11-C';
        document.getElementById('option-5-D').id = 'option-11-D';
        document.getElementById('option-11-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十七号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p17.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity17();
        });
        document.getElementById('option-11-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p05.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity5();
        });
        document.getElementById('option-11-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十九号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p19.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity19();
        });
        document.getElementById('option-11-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p23.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity23();
        });
      });
      document.getElementById('option-5-D').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最喜欢喝的饮料是？";
        document.getElementById('option-5-A').innerText = '肥宅快乐水';
        document.getElementById('option-5-B').innerText = '啵啵奶茶';
        document.getElementById('option-5-C').innerText = '星空苏打水';
        document.getElementById('option-5-D').innerText = '雪顶咖啡';
        document.getElementById('option-5-A').id = 'option-12-A';
        document.getElementById('option-5-B').id = 'option-12-B';
        document.getElementById('option-5-C').id = 'option-12-C';
        document.getElementById('option-5-D').id = 'option-12-D';
        document.getElementById('option-12-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十六号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p26.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity26();
        });
        document.getElementById('option-12-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p20.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity20();
        });
        document.getElementById('option-12-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十七号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p27.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity27();
        });
        document.getElementById('option-12-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十八号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p28.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity28();
        });
      });
    });
    document.getElementById('option-3-C').addEventListener('click',function(){
      document.getElementById('bg-sky-2').classList.add('sky-move-in');
      document.getElementById('bg-sky-3').classList.add('sky-move-out');
      document.getElementById('que').innerHTML = "旅游胜地的哪个特质最吸引你？";
      document.getElementById('option-3-A').innerText = '优美的风景';
      document.getElementById('option-3-B').innerText = '热情的民风';
      document.getElementById('option-3-C').innerText = '悠久的历史';
      document.getElementById('option-3-D').innerText = '浪漫的氛围';
      document.getElementById('option-3-A').id = 'option-5-A';
      document.getElementById('option-3-B').id = 'option-5-B';
      document.getElementById('option-3-C').id = 'option-5-C';
      document.getElementById('option-3-D').id = 'option-5-D';
      document.getElementById('option-5-A').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "如果结婚戒指不是钻石，你更希望是哪一种宝石？";
        document.getElementById('option-5-A').innerText = '祖母绿';
        document.getElementById('option-5-B').innerText = '蓝宝石';
        document.getElementById('option-5-C').innerText = '红宝石';
        document.getElementById('option-5-D').innerText = '水晶';
        document.getElementById('option-5-A').id = 'option-9-A';
        document.getElementById('option-5-B').id = 'option-9-B';
        document.getElementById('option-5-C').id = 'option-9-C';
        document.getElementById('option-5-D').id = 'option-9-D';
        document.getElementById('option-9-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p12.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity12();
        });
        document.getElementById('option-9-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p15.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity15();
        });
        document.getElementById('option-9-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到九号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p09.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity9();
        });
        document.getElementById('option-9-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p13.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity13();
        });
      });
      document.getElementById('option-5-B').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最喜欢的一种水果是？";
        document.getElementById('option-5-A').innerText = '苹果';
        document.getElementById('option-5-B').innerText = '山竹';
        document.getElementById('option-5-C').innerText = '石榴';
        document.getElementById('option-5-D').innerText = '甘蔗';
        document.getElementById('option-5-A').id = 'option-10-A';
        document.getElementById('option-5-B').id = 'option-10-B';
        document.getElementById('option-5-C').id = 'option-10-C';
        document.getElementById('option-5-D').id = 'option-10-D';
        document.getElementById('option-10-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十四号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p14.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity14();
        });
        document.getElementById('option-10-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p10.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity10();
        });
        document.getElementById('option-10-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到六号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p06.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity6();
        });
        document.getElementById('option-10-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十八号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p18.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identit18();
        });
      });
      document.getElementById('option-5-C').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "如果你可以变身为一种小动物，<br/>你最想成为哪一种？";
        document.getElementById('option-5-A').innerText = '狗狗';
        document.getElementById('option-5-B').innerText = '兔兔';
        document.getElementById('option-5-C').innerText = '猫咪';
        document.getElementById('option-5-D').innerText = '天鹅';
        document.getElementById('option-5-A').id = 'option-11-A';
        document.getElementById('option-5-B').id = 'option-11-B';
        document.getElementById('option-5-C').id = 'option-11-C';
        document.getElementById('option-5-D').id = 'option-11-D';
        document.getElementById('option-11-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十七号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p17.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity17();
        });
        document.getElementById('option-11-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p05.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity5();
        });
        document.getElementById('option-11-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十九号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p19.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity19();
        });
        document.getElementById('option-11-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p23.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity23();
        });
      });
      document.getElementById('option-5-D').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最喜欢喝的饮料是？";
        document.getElementById('option-5-A').innerText = '肥宅快乐水';
        document.getElementById('option-5-B').innerText = '啵啵奶茶';
        document.getElementById('option-5-C').innerText = '星空苏打水';
        document.getElementById('option-5-D').innerText = '雪顶咖啡';
        document.getElementById('option-5-A').id = 'option-12-A';
        document.getElementById('option-5-B').id = 'option-12-B';
        document.getElementById('option-5-C').id = 'option-12-C';
        document.getElementById('option-5-D').id = 'option-12-D';
        document.getElementById('option-12-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十六号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p26.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity26();
        });
        document.getElementById('option-12-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p20.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity20();
        });
        document.getElementById('option-12-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十七号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p27.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity27();
        });
        document.getElementById('option-12-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十八号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p28.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity28();
        });
      });
    });
    document.getElementById('option-3-D').addEventListener('click',function(){
      document.getElementById('bg-sky-2').classList.add('sky-move-in');
      document.getElementById('bg-sky-3').classList.add('sky-move-out');
      document.getElementById('que').innerHTML = "日常生活中你最在意自己或他人的哪项细节？";
      document.getElementById('option-3-A').innerText = "是否有好的衣品";
      document.getElementById('option-3-B').innerText = "手指甲是否干净";
      document.getElementById('option-3-C').innerText = "发型是否好看";
      document.getElementById('option-3-D').innerText = "有没有好闻的气味";
      document.getElementById('option-3-A').id = 'option-4-A';
      document.getElementById('option-3-B').id = 'option-4-B';
      document.getElementById('option-3-C').id = 'option-4-C';
      document.getElementById('option-3-D').id = 'option-4-D';
      document.getElementById('option-4-A').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最想获得哪一项技能？";
        document.getElementById('option-4-A').innerText = '会玩滑板';
        document.getElementById('option-4-B').innerText = '超群画技';
        document.getElementById('option-4-C').innerText = '迷人声线';
        document.getElementById('option-4-D').innerText = '穿衣有品';
        document.getElementById('option-4-A').id = 'option-6-A';
        document.getElementById('option-4-B').id = 'option-6-B';
        document.getElementById('option-4-C').id = 'option-6-C';
        document.getElementById('option-4-D').id = 'option-6-D';
        document.getElementById('option-6-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p02.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity2();
        });
        document.getElementById('option-6-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十一号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p21.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity21();
        });
        document.getElementById('option-6-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十四号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p24.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity24();
        });
        document.getElementById('option-6-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十一号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p11.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity11();
        });
      });
      document.getElementById('option-4-B').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "你最喜欢的服饰单品是哪一个？";
        document.getElementById('option-4-A').innerText = '衬衣';
        document.getElementById('option-4-B').innerText = '夹克';
        document.getElementById('option-4-C').innerText = '鞋子';
        document.getElementById('option-4-D').innerText = '披风';
        document.getElementById('option-4-B').id = 'option-7-B';
        document.getElementById('option-4-A').id = 'option-7-A';
        document.getElementById('option-4-C').id = 'option-7-C';
        document.getElementById('option-4-D').id = 'option-7-D';
        document.getElementById('option-7-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p03.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity3();
        });
        document.getElementById('option-7-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到一号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p01.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
        });
        document.getElementById('option-7-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p25.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity25();
        });
        document.getElementById('option-7-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到七号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p07.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity7();
        });
      });
      document.getElementById('option-4-C').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "假如你回到小时候，最想玩什么游戏？";
        document.getElementById('option-4-A').innerText = '堆沙子';
        document.getElementById('option-4-B').innerText = '荡秋千';
        document.getElementById('option-4-C').innerText = '玩跷跷板';
        document.getElementById('option-4-D').innerText = '滑滑梯';
        document.getElementById('option-4-C').id = 'option-8-C';
        document.getElementById('option-4-A').id = 'option-8-A';
        document.getElementById('option-4-B').id = 'option-8-B';
        document.getElementById('option-4-D').id = 'option-8-D';
        document.getElementById('option-8-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到八号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p08.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity8();
        });
        document.getElementById('option-8-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十六号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p16.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity16();
        });
        document.getElementById('option-8-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到四号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p04.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity4();
        });
        document.getElementById('option-8-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到二十二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p22.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity22();
        });
        
      });
      document.getElementById('option-4-D').addEventListener('click',function(){
        document.getElementById('bg-sky-1').classList.add('sky-move-in');
        document.getElementById('bg-sky-2').classList.add('sky-move-out');
        document.getElementById('que').innerHTML = "如果结婚戒指不是钻石，你更希望是哪一种宝石？";
        document.getElementById('option-4-A').innerText = '祖母绿';
        document.getElementById('option-4-B').innerText = '蓝宝石';
        document.getElementById('option-4-C').innerText = '红宝石';
        document.getElementById('option-4-D').innerText = '水晶';
        document.getElementById('option-4-D').id = 'option-9-D';
        document.getElementById('option-4-A').id = 'option-9-A';
        document.getElementById('option-4-B').id = 'option-9-B';
        document.getElementById('option-4-C').id = 'option-9-C';
        document.getElementById('option-9-D').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十二号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p12.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity12();
        });
        document.getElementById('option-9-A').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十五号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p15.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity15();
        });
        document.getElementById('option-9-B').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到九号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p09.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity9();
        });
        document.getElementById('option-9-C').addEventListener('click',function(){
          document.getElementById('que').innerHTML = "这里得到十三号结论";
          document.getElementById('subject').setAttribute('style','visibility: hidden;')
          document.getElementById('constellation-img').setAttribute('style',"background-image: url('https://oiooiiio.github.io/constellation-h5/img/con-img-zipped/p13.jpg');")
          document.getElementById('constellation-img').classList.add('constellation-show');
          document.getElementById('creat-button').setAttribute('style','visibility: visible;');
          identity13();
        });
      });
    });
  }
  var optionOne = function(){
    document.getElementById('js-music-ctl').classList.add('play');
    document.getElementById('js-bg-music').play();
    document.getElementById('js-que-music').pause();
    document.getElementById('js-que-music').currentTime = 0
    document.getElementById('bg-sky-4').classList.add('sky-move-in');
    document.getElementById('bg-sky-5').classList.add('sky-move-out');
    document.getElementById('subject').innerHTML = "<span id='que'>选择一个你喜欢的图形?</span><table class='option'><tbody><tr><td class='option-2' id='option-2-A' style='width:25%'><img src='https://oiooiiio.github.io/constellation-h5/img/1.png'></td><td class='option-2' id='option-2-B' style='width:25%'><img src='https://oiooiiio.github.io/constellation-h5/img/2.png'></td><td class='option-2' id='option-2-C' style='width:25%'><img src='https://oiooiiio.github.io/constellation-h5/img/3.png'></td><td class='option-2' id='option-2-D' style='width:25%'><img src='https://oiooiiio.github.io/constellation-h5/img/4.png'></td></tr></tbody></table>";
    
    var optionName = document.getElementsByClassName("option-2");
    for (var i = 0; i < optionName.length; i++) {
      optionName[i].addEventListener('click', optionTwo, console);
    }
  }
  var optionName = document.getElementsByClassName("option-1");
  for (var i = 0; i < optionName.length; i++) {
    optionName[i].addEventListener('click', optionOne, console);
  }
}
Option();