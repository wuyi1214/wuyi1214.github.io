

document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10; // 每页显示的行数
    let currentPage = 1; // 当前页码
    let collectedString = '';
    let collectedString_1 = '';
    let collectedString_2 = '';
    let collectedString_3 = '';
    let collectedString_4 = '';
    let collectedString_5 = '';
    let collectedString_6 = '';
    
    const totalRows = 167; // 总行数（示例数据，实际应动态获取）


    const tableBody = document.getElementById('table-body');
    const goPageButton = document.getElementById('go-to-page');
    const firstPageButton = document.getElementById('first-page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    // 示例数据（实际应动态获取或从服务器加载）
    const data = [

        { title: '无画风原图', images: ['og/1.png', 'og/2.png', 'og/3.png'] },
        { title: 'artist:gomi (hakumaiteacher)', images: ['jpg_1/gomi (hakumaiteacher).jpg', 'jpg_2/gomi (hakumaiteacher).jpg', 'jpg_3/gomi (hakumaiteacher).jpg'] },
        { title: 'artist:inaeda kei', images: ['jpg_1/inaeda kei.jpg', 'jpg_2/inaeda kei.jpg', 'jpg_3/inaeda kei.jpg'] },
        { title: 'artist:38 (sanjuuhachi)', images: ['jpg_1/38 (sanjuuhachi).jpg', 'jpg_2/38 (sanjuuhachi).jpg', 'jpg_3/38 (sanjuuhachi).jpg'] },
        { title: 'artist:piromizu', images: ['jpg_1/piromizu.jpg', 'jpg_2/piromizu.jpg', 'jpg_3/piromizu.jpg'] },
        { title: 'artist:tianliang duohe fangdongye', images: ['jpg_1/tianliang duohe fangdongye.jpg', 'jpg_2/tianliang duohe fangdongye.jpg', 'jpg_3/tianliang duohe fangdongye.jpg'] },
        { title: 'artist:nyatabe', images: ['jpg_1/nyatabe.jpg', 'jpg_2/nyatabe.jpg', 'jpg_3/nyatabe.jpg'] },
        { title: 'artist:elocca', images: ['jpg_1/elocca.jpg', 'jpg_2/elocca.jpg', 'jpg_3/elocca.jpg'] },
        { title: 'artist:suzuki toto', images: ['jpg_1/suzuki toto.jpg', 'jpg_2/suzuki toto.jpg', 'jpg_3/suzuki toto.jpg'] },
        { title: 'artist:letdie1414', images: ['jpg_1/letdie1414.jpg', 'jpg_2/letdie1414.jpg', 'jpg_3/letdie1414.jpg'] },
        { title: 'artist:siu (siu0207)', images: ['jpg_1/siu (siu0207).jpg', 'jpg_2/siu (siu0207).jpg', 'jpg_3/siu (siu0207).jpg'] },
        { title: 'artist:love cacao', images: ['jpg_1/love cacao.jpg', 'jpg_2/love cacao.jpg', 'jpg_3/love cacao.jpg'] },
        { title: 'artist:punc p', images: ['jpg_1/punc p.jpg', 'jpg_2/punc p.jpg', 'jpg_3/punc p.jpg'] },
        { title: 'artist:instant ip', images: ['jpg_1/instant ip.jpg', 'jpg_2/instant ip.jpg', 'jpg_3/instant ip.jpg'] },
        { title: 'artist:satou kuuki', images: ['jpg_1/satou kuuki.jpg', 'jpg_2/satou kuuki.jpg', 'jpg_3/satou kuuki.jpg'] },
        { title: 'artist:miyashiro ryuutarou', images: ['jpg_1/miyashiro ryuutarou.jpg', 'jpg_2/miyashiro ryuutarou.jpg', 'jpg_3/miyashiro ryuutarou.jpg'] },
        { title: 'artist:c.honey', images: ['jpg_1/c.honey.jpg', 'jpg_2/c.honey.jpg', 'jpg_3/c.honey.jpg'] },
        { title: 'artist:dishwasher1910', images: ['jpg_1/dishwasher1910.jpg', 'jpg_2/dishwasher1910.jpg', 'jpg_3/dishwasher1910.jpg'] },
        { title: 'artist:sadakage', images: ['jpg_1/sadakage.jpg', 'jpg_2/sadakage.jpg', 'jpg_3/sadakage.jpg'] },
        { title: 'artist:freng', images: ['jpg_1/freng.jpg', 'jpg_2/freng.jpg', 'jpg_3/freng.jpg'] },
        { title: 'artist:ogipote', images: ['jpg_1/ogipote.jpg', 'jpg_2/ogipote.jpg', 'jpg_3/ogipote.jpg'] },
        { title: 'artist:sutorora', images: ['jpg_1/sutorora.jpg', 'jpg_2/sutorora.jpg', 'jpg_3/sutorora.jpg'] },
        { title: 'artist:miv4t', images: ['jpg_1/miv4t.jpg', 'jpg_2/miv4t.jpg', 'jpg_3/miv4t.jpg'] },
        { title: 'artist:kantoku', images: ['jpg_1/kantoku.jpg', 'jpg_2/kantoku.jpg', 'jpg_3/kantoku.jpg'] },
        { title: 'artist:gibagiba', images: ['jpg_1/gibagiba.jpg', 'jpg_2/gibagiba.jpg', 'jpg_3/gibagiba.jpg'] },
        { title: 'artist:sayori (oskn)', images: ['jpg_1/sayori (oskn).jpg', 'jpg_2/sayori (oskn).jpg', 'jpg_3/sayori (oskn).jpg'] },
        { title: 'artist:kidmo', images: ['jpg_1/kidmo.jpg', 'jpg_2/kidmo.jpg', 'jpg_3/kidmo.jpg'] },
        { title: 'artist:jp06', images: ['jpg_1/jp06.jpg', 'jpg_2/jp06.jpg', 'jpg_3/jp06.jpg'] },
        { title: 'artist:betabeet', images: ['jpg_1/betabeet.jpg', 'jpg_2/betabeet.jpg', 'jpg_3/betabeet.jpg'] },
        { title: 'artist:beijuu', images: ['jpg_1/beijuu.jpg', 'jpg_2/beijuu.jpg', 'jpg_3/beijuu.jpg'] },
        { title: 'artist:mimonel', images: ['jpg_1/mimonel.jpg', 'jpg_2/mimonel.jpg', 'jpg_3/mimonel.jpg'] },
        { title: 'artist:nixeu', images: ['jpg_1/nixeu.jpg', 'jpg_2/nixeu.jpg', 'jpg_3/nixeu.jpg'] },
        { title: 'artist:satou kibi', images: ['jpg_1/satou kibi.jpg', 'jpg_2/satou kibi.jpg', 'jpg_3/satou kibi.jpg'] },
        { title: 'artist:ekrea jan', images: ['jpg_1/ekrea jan.jpg', 'jpg_2/ekrea jan.jpg', 'jpg_3/ekrea jan.jpg'] },
        { title: 'artist:tokkyu', images: ['jpg_1/tokkyu.jpg', 'jpg_2/tokkyu.jpg', 'jpg_3/tokkyu.jpg'] },
        { title: 'artist:modare', images: ['jpg_1/modare.jpg', 'jpg_2/modare.jpg', 'jpg_3/modare.jpg'] },
        { title: 'artist:menthako', images: ['jpg_1/menthako.jpg', 'jpg_2/menthako.jpg', 'jpg_3/menthako.jpg'] },
        { title: 'artist:ryuuforkaf', images: ['jpg_1/ryuuforkaf.jpg', 'jpg_2/ryuuforkaf.jpg', 'jpg_3/ryuuforkaf.jpg'] },
        { title: 'artist:mi taro333', images: ['jpg_1/mi taro333.jpg', 'jpg_2/mi taro333.jpg', 'jpg_3/mi taro333.jpg'] },
        { title: 'artist:ciloranko', images: ['jpg_1/ciloranko.jpg', 'jpg_2/ciloranko.jpg', 'jpg_3/ciloranko.jpg'] },
        { title: 'artist:ask (askzy)', images: ['jpg_1/ask (askzy).jpg', 'jpg_2/ask (askzy).jpg', 'jpg_3/ask (askzy).jpg'] },
        { title: 'artist:wanke', images: ['jpg_1/wanke.jpg', 'jpg_2/wanke.jpg', 'jpg_3/wanke.jpg'] },
        { title: 'artist:yoneyama mai', images: ['jpg_1/yoneyama mai.jpg', 'jpg_2/yoneyama mai.jpg', 'jpg_3/yoneyama mai.jpg'] },
        { title: 'artist:quasarcake', images: ['jpg_1/quasarcake.jpg', 'jpg_2/quasarcake.jpg', 'jpg_3/quasarcake.jpg'] },
        { title: 'artist:momoko (momopoco)', images: ['jpg_1/momoko (momopoco).jpg', 'jpg_2/momoko (momopoco).jpg', 'jpg_3/momoko (momopoco).jpg'] },
        { title: 'artist:meion', images: ['jpg_1/meion.jpg', 'jpg_2/meion.jpg', 'jpg_3/meion.jpg'] },
        { title: 'artist:ilya kuvshinov', images: ['jpg_1/ilya kuvshinov.jpg', 'jpg_2/ilya kuvshinov.jpg', 'jpg_3/ilya kuvshinov.jpg'] },
        { title: 'artist:nababa', images: ['jpg_1/nababa.jpg', 'jpg_2/nababa.jpg', 'jpg_3/nababa.jpg'] },
        { title: 'artist:agoto', images: ['jpg_1/agoto.jpg', 'jpg_2/agoto.jpg', 'jpg_3/agoto.jpg'] },
        { title: 'artist:binggong asylum', images: ['jpg_1/binggong asylum.jpg', 'jpg_2/binggong asylum.jpg', 'jpg_3/binggong asylum.jpg'] },
        { title: 'artist:5t (5t 000)', images: ['jpg_1/5t (5t 000).jpg', 'jpg_2/5t (5t 000).jpg', 'jpg_3/5t (5t 000).jpg'] },
        { title: 'artist:chen bin', images: ['jpg_1/chen bin.jpg', 'jpg_2/chen bin.jpg', 'jpg_3/chen bin.jpg'] },
        { title: 'artist:ttosom', images: ['jpg_1/ttosom.jpg', 'jpg_2/ttosom.jpg', 'jpg_3/ttosom.jpg'] },
        { title: 'artist:stmast', images: ['jpg_1/stmast.jpg', 'jpg_2/stmast.jpg', 'jpg_3/stmast.jpg'] },
        { title: 'artist:icecake', images: ['jpg_1/icecake.jpg', 'jpg_2/icecake.jpg', 'jpg_3/icecake.jpg'] },
        { title: 'artist:rei (sanbonzakura)', images: ['jpg_1/rei (sanbonzakura).jpg', 'jpg_2/rei (sanbonzakura).jpg', 'jpg_3/rei (sanbonzakura).jpg'] },
        { title: 'artist:torino aqua', images: ['jpg_1/torino aqua.jpg', 'jpg_2/torino aqua.jpg', 'jpg_3/torino aqua.jpg'] },
        { title: 'artist:suzumi (ccroquette)', images: ['jpg_1/suzumi (ccroquette).jpg', 'jpg_2/suzumi (ccroquette).jpg', 'jpg_3/suzumi (ccroquette).jpg'] },
        { title: 'artist:dino (dinoartforame)', images: ['jpg_1/dino (dinoartforame).jpg', 'jpg_2/dino (dinoartforame).jpg', 'jpg_3/dino (dinoartforame).jpg'] },
        { title: 'artist:fkey', images: ['jpg_1/fkey.jpg', 'jpg_2/fkey.jpg', 'jpg_3/fkey.jpg'] },
        { title: 'artist:gomashio ponz', images: ['jpg_1/gomashio ponz.jpg', 'jpg_2/gomashio ponz.jpg', 'jpg_3/gomashio ponz.jpg'] },
        { title: 'artist:otintin', images: ['jpg_1/otintin.jpg', 'jpg_2/otintin.jpg', 'jpg_3/otintin.jpg'] },
        { title: 'artist:kabu (niniko2ko)', images: ['jpg_1/kabu (niniko2ko).jpg', 'jpg_2/kabu (niniko2ko).jpg', 'jpg_3/kabu (niniko2ko).jpg'] },
        { title: 'artist:eu03', images: ['jpg_1/eu03.jpg', 'jpg_2/eu03.jpg', 'jpg_3/eu03.jpg'] },
        { title: 'artist:aamond', images: ['jpg_1/aamond.jpg', 'jpg_2/aamond.jpg', 'jpg_3/aamond.jpg'] },
        { title: 'artist:taitai', images: ['jpg_1/taitai.jpg', 'jpg_2/taitai.jpg', 'jpg_3/taitai.jpg'] },
        { title: 'artist:zuizi', images: ['jpg_1/zuizi.jpg', 'jpg_2/zuizi.jpg', 'jpg_3/zuizi.jpg'] },
        { title: 'artist:reoen', images: ['jpg_1/reoen.jpg', 'jpg_2/reoen.jpg', 'jpg_3/reoen.jpg'] },
        { title: 'artist:dawalixi', images: ['jpg_1/dawalixi.jpg', 'jpg_2/dawalixi.jpg', 'jpg_3/dawalixi.jpg'] },
        { title: 'artist:less', images: ['jpg_1/less.jpg', 'jpg_2/less.jpg', 'jpg_3/less.jpg'] },
        { title: 'artist:qizhu', images: ['jpg_1/qizhu.jpg', 'jpg_2/qizhu.jpg', 'jpg_3/qizhu.jpg'] },
        { title: 'artist:john kafka', images: ['jpg_1/john kafka.jpg', 'jpg_2/john kafka.jpg', 'jpg_3/john kafka.jpg'] },
        { title: 'artist:rhine (overtonerhine)', images: ['jpg_1/rhine (overtonerhine).jpg', 'jpg_2/rhine (overtonerhine).jpg', 'jpg_3/rhine (overtonerhine).jpg'] },
        { title: 'artist:tab head', images: ['jpg_1/tab head.jpg', 'jpg_2/tab head.jpg', 'jpg_3/tab head.jpg'] },
        { title: 'artist:lance (lancelliu)', images: ['jpg_1/lance (lancelliu).jpg', 'jpg_2/lance (lancelliu).jpg', 'jpg_3/lance (lancelliu).jpg'] },
        { title: 'artist:suujiniku', images: ['jpg_1/suujiniku.jpg', 'jpg_2/suujiniku.jpg', 'jpg_3/suujiniku.jpg'] },
        { title: 'artist:huanxiang heitu', images: ['jpg_1/huanxiang heitu.jpg', 'jpg_2/huanxiang heitu.jpg', 'jpg_3/huanxiang heitu.jpg'] },
        { title: 'artist:void 0', images: ['jpg_1/void 0.jpg', 'jpg_2/void 0.jpg', 'jpg_3/void 0.jpg'] },
        { title: 'artist:kasuga haruhi', images: ['jpg_1/kasuga haruhi.jpg', 'jpg_2/kasuga haruhi.jpg', 'jpg_3/kasuga haruhi.jpg'] },
        { title: 'artist:himonoata', images: ['jpg_1/himonoata.jpg', 'jpg_2/himonoata.jpg', 'jpg_3/himonoata.jpg'] },
        { title: 'artist:opossumachine', images: ['jpg_1/opossumachine.jpg', 'jpg_2/opossumachine.jpg', 'jpg_3/opossumachine.jpg'] },
        { title: 'artist:sy4', images: ['jpg_1/sy4.jpg', 'jpg_2/sy4.jpg', 'jpg_3/sy4.jpg'] },
        { title: 'artist:rhasta', images: ['jpg_1/rhasta.jpg', 'jpg_2/rhasta.jpg', 'jpg_3/rhasta.jpg'] },
        { title: 'artist:atdan', images: ['jpg_1/atdan.jpg', 'jpg_2/atdan.jpg', 'jpg_3/atdan.jpg'] },
        { title: 'artist:hiten (hitenkei)', images: ['jpg_1/hiten (hitenkei).jpg', 'jpg_2/hiten (hitenkei).jpg', 'jpg_3/hiten (hitenkei).jpg'] },
        { title: 'artist:kousaki rui', images: ['jpg_1/kousaki rui.jpg', 'jpg_2/kousaki rui.jpg', 'jpg_3/kousaki rui.jpg'] },
        { title: 'artist:watersnake', images: ['jpg_1/watersnake.jpg', 'jpg_2/watersnake.jpg', 'jpg_3/watersnake.jpg'] },
        { title: 'artist:hwan (verypoor)', images: ['jpg_1/hwan (verypoor).jpg', 'jpg_2/hwan (verypoor).jpg', 'jpg_3/hwan (verypoor).jpg'] },
        { title: 'artist:iwamushi', images: ['jpg_1/iwamushi.jpg', 'jpg_2/iwamushi.jpg', 'jpg_3/iwamushi.jpg'] },
        { title: 'artist:liduke', images: ['jpg_1/liduke.jpg', 'jpg_2/liduke.jpg', 'jpg_3/liduke.jpg'] },
        { title: 'artist:aak', images: ['jpg_1/aak.jpg', 'jpg_2/aak.jpg', 'jpg_3/aak.jpg'] },
        { title: 'artist:namie-kun', images: ['jpg_1/namie-kun.jpg', 'jpg_2/namie-kun.jpg', 'jpg_3/namie-kun.jpg'] },
        { title: 'artist:tidsean', images: ['jpg_1/tidsean.jpg', 'jpg_2/tidsean.jpg', 'jpg_3/tidsean.jpg'] },
        { title: 'artist:migolu', images: ['jpg_1/migolu.jpg', 'jpg_2/migolu.jpg', 'jpg_3/migolu.jpg'] },
        { title: 'artist:ruriri', images: ['jpg_1/ruriri.jpg', 'jpg_2/ruriri.jpg', 'jpg_3/ruriri.jpg'] },
        { title: 'artist:rolua', images: ['jpg_1/rolua.jpg', 'jpg_2/rolua.jpg', 'jpg_3/rolua.jpg'] },
        { title: 'artist:houkisei', images: ['jpg_1/houkisei.jpg', 'jpg_2/houkisei.jpg', 'jpg_3/houkisei.jpg'] },
        { title: 'artist:kankan33333', images: ['jpg_1/kankan33333.jpg', 'jpg_2/kankan33333.jpg', 'jpg_3/kankan33333.jpg'] },
        { title: 'artist:qys3', images: ['jpg_1/qys3.jpg', 'jpg_2/qys3.jpg', 'jpg_3/qys3.jpg'] },
        { title: 'artist:noyu (noyu23386566)', images: ['jpg_1/noyu (noyu23386566).jpg', 'jpg_2/noyu (noyu23386566).jpg', 'jpg_3/noyu (noyu23386566).jpg'] },
        { title: 'artist:pikaole', images: ['jpg_1/pikaole.jpg', 'jpg_2/pikaole.jpg', 'jpg_3/pikaole.jpg'] },
        { title: 'artist:amashiro natsuki', images: ['jpg_1/amashiro natsuki.jpg', 'jpg_2/amashiro natsuki.jpg', 'jpg_3/amashiro natsuki.jpg'] },
        { title: 'artist:riichu', images: ['jpg_1/riichu.jpg', 'jpg_2/riichu.jpg', 'jpg_3/riichu.jpg'] },
        { title: 'artist:ikemeru19', images: ['jpg_1/ikemeru19.jpg', 'jpg_2/ikemeru19.jpg', 'jpg_3/ikemeru19.jpg'] },
        { title: 'artist:cluseller', images: ['jpg_1/cluseller.jpg', 'jpg_2/cluseller.jpg', 'jpg_3/cluseller.jpg'] },
        { title: 'artist:vahn yourdoom', images: ['jpg_1/vahn yourdoom.jpg', 'jpg_2/vahn yourdoom.jpg', 'jpg_3/vahn yourdoom.jpg'] },
        { title: 'artist:terasu mc', images: ['jpg_1/terasu mc.jpg', 'jpg_2/terasu mc.jpg', 'jpg_3/terasu mc.jpg'] },
        { title: 'artist:caisan', images: ['jpg_1/caisan.jpg', 'jpg_2/caisan.jpg', 'jpg_3/caisan.jpg'] },
        { title: 'artist:tokonone', images: ['jpg_1/tokonone.jpg', 'jpg_2/tokonone.jpg', 'jpg_3/tokonone.jpg'] },
        { title: 'artist:wanaata', images: ['jpg_1/wanaata.jpg', 'jpg_2/wanaata.jpg', 'jpg_3/wanaata.jpg'] },
        { title: 'artist:taesi', images: ['jpg_1/taesi.jpg', 'jpg_2/taesi.jpg', 'jpg_3/taesi.jpg'] },
        { title: 'artist:xinzoruo', images: ['jpg_1/xinzoruo.jpg', 'jpg_2/xinzoruo.jpg', 'jpg_3/xinzoruo.jpg'] },
        { title: 'artist:mikozin', images: ['jpg_1/mikozin.jpg', 'jpg_2/mikozin.jpg', 'jpg_3/mikozin.jpg'] },
        { title: 'artist:garuku', images: ['jpg_1/garuku.jpg', 'jpg_2/garuku.jpg', 'jpg_3/garuku.jpg'] },
        { title: 'artist:naga u', images: ['jpg_1/naga u.jpg', 'jpg_2/naga u.jpg', 'jpg_3/naga u.jpg'] },
        { title: 'artist:shion (mirudakemann)', images: ['jpg_1/shion (mirudakemann).jpg', 'jpg_2/shion (mirudakemann).jpg', 'jpg_3/shion (mirudakemann).jpg'] },
        { title: 'artist:xiangzi box', images: ['jpg_1/xiangzi box.jpg', 'jpg_2/xiangzi box.jpg', 'jpg_3/xiangzi box.jpg'] },
        { title: 'artist:feral lemma', images: ['jpg_1/feral lemma.jpg', 'jpg_2/feral lemma.jpg', 'jpg_3/feral lemma.jpg'] },
        { title: 'artist:wakaba (945599620)', images: ['jpg_1/wakaba (945599620).jpg', 'jpg_2/wakaba (945599620).jpg', 'jpg_3/wakaba (945599620).jpg'] },
        { title: 'artist:tira 27', images: ['jpg_1/tira 27.jpg', 'jpg_2/tira 27.jpg', 'jpg_3/tira 27.jpg'] },
        { title: 'artist:kawacy', images: ['jpg_1/kawacy.jpg', 'jpg_2/kawacy.jpg', 'jpg_3/kawacy.jpg'] },
        { title: 'artist:chahan (fried rice0614)', images: ['jpg_1/chahan (fried rice0614).jpg', 'jpg_2/chahan (fried rice0614).jpg', 'jpg_3/chahan (fried rice0614).jpg'] },
        { title: 'artist:kame (kamepan44231)', images: ['jpg_1/kame (kamepan44231).jpg', 'jpg_2/kame (kamepan44231).jpg', 'jpg_3/kame (kamepan44231).jpg'] },
        { title: 'artist:dk.senie', images: ['jpg_1/dk.senie.jpg', 'jpg_2/dk.senie.jpg', 'jpg_3/dk.senie.jpg'] },
        { title: 'artist:free style (yohan1754)', images: ['jpg_1/free style (yohan1754).jpg', 'jpg_2/free style (yohan1754).jpg', 'jpg_3/free style (yohan1754).jpg'] },
        { title: 'artist:nephlite', images: ['jpg_1/nephlite.jpg', 'jpg_2/nephlite.jpg', 'jpg_3/nephlite.jpg'] },
        { title: 'artist:iuui', images: ['jpg_1/iuui.jpg', 'jpg_2/iuui.jpg', 'jpg_3/iuui.jpg'] },
        { title: 'artist:gsusart', images: ['jpg_1/gsusart.jpg', 'jpg_2/gsusart.jpg', 'jpg_3/gsusart.jpg'] },
        { title: 'artist:nuu (nu-nyu)', images: ['jpg_1/nuu (nu-nyu).jpg', 'jpg_2/nuu (nu-nyu).jpg', 'jpg_3/nuu (nu-nyu).jpg'] },
        { title: 'artist:norza', images: ['jpg_1/norza.jpg', 'jpg_2/norza.jpg', 'jpg_3/norza.jpg'] },
        { title: 'artist:lm7 (op-center)', images: ['jpg_1/lm7 (op-center).jpg', 'jpg_2/lm7 (op-center).jpg', 'jpg_3/lm7 (op-center).jpg'] },
        { title: 'artist:bee (deadflow)', images: ['jpg_1/bee (deadflow).jpg', 'jpg_2/bee (deadflow).jpg', 'jpg_3/bee (deadflow).jpg'] },
        { title: 'artist:sarcophage', images: ['jpg_1/sarcophage.jpg', 'jpg_2/sarcophage.jpg', 'jpg_3/sarcophage.jpg'] },
        { title: 'artist:shibuya (kurokamishain)', images: ['jpg_1/shibuya (kurokamishain).jpg', 'jpg_2/shibuya (kurokamishain).jpg', 'jpg_3/shibuya (kurokamishain).jpg'] },
        { title: 'artist:ro g (oowack)', images: ['jpg_1/ro g (oowack).jpg', 'jpg_2/ro g (oowack).jpg', 'jpg_3/ro g (oowack).jpg'] },
        { title: 'artist:yunsang', images: ['jpg_1/yunsang.jpg', 'jpg_2/yunsang.jpg', 'jpg_3/yunsang.jpg'] },
        { title: 'artist:timbougami', images: ['jpg_1/timbougami.jpg', 'jpg_2/timbougami.jpg', 'jpg_3/timbougami.jpg'] },
        { title: 'artist:milkychu', images: ['jpg_1/milkychu.jpg', 'jpg_2/milkychu.jpg', 'jpg_3/milkychu.jpg'] },
        { title: 'artist:mika pikazo', images: ['jpg_1/mika pikazo.jpg', 'jpg_2/mika pikazo.jpg', 'jpg_3/mika pikazo.jpg'] },
        { title: 'artist:torriet', images: ['jpg_1/torriet.jpg', 'jpg_2/torriet.jpg', 'jpg_3/torriet.jpg'] },
        { title: 'artist:deyui', images: ['jpg_1/deyui.jpg', 'jpg_2/deyui.jpg', 'jpg_3/deyui.jpg'] },
        { title: 'artist:rurudo', images: ['jpg_1/rurudo.jpg', 'jpg_2/rurudo.jpg', 'jpg_3/rurudo.jpg'] },
        { title: 'artist:omurice (roza4957)', images: ['jpg_1/omurice (roza4957).jpg', 'jpg_2/omurice (roza4957).jpg', 'jpg_3/omurice (roza4957).jpg'] },
        { title: 'artist:patzzi', images: ['jpg_1/patzzi.jpg', 'jpg_2/patzzi.jpg', 'jpg_3/patzzi.jpg'] },
        { title: 'artist:j.k.', images: ['jpg_1/j.k..jpg', 'jpg_2/j.k..jpg', 'jpg_3/j.k..jpg'] },
        { title: 'artist:robo mikan', images: ['jpg_1/robo mikan.jpg', 'jpg_2/robo mikan.jpg', 'jpg_3/robo mikan.jpg'] },
        { title: 'artist:nat the lich', images: ['jpg_1/nat the lich.jpg', 'jpg_2/nat the lich.jpg', 'jpg_3/nat the lich.jpg'] },
        { title: 'artist:yuming li', images: ['jpg_1/yuming li.jpg', 'jpg_2/yuming li.jpg', 'jpg_3/yuming li.jpg'] },
        { title: 'artist:skyrick9413', images: ['jpg_1/skyrick9413.jpg', 'jpg_2/skyrick9413.jpg', 'jpg_3/skyrick9413.jpg'] },
        { title: 'artist:crumbles', images: ['jpg_1/crumbles.jpg', 'jpg_2/crumbles.jpg', 'jpg_3/crumbles.jpg'] },
        { title: 'artist:shokushi yuu', images: ['jpg_1/shokushi yuu.jpg', 'jpg_2/shokushi yuu.jpg', 'jpg_3/shokushi yuu.jpg'] },
        { title: 'artist:vania600', images: ['jpg_1/vania600.jpg', 'jpg_2/vania600.jpg', 'jpg_3/vania600.jpg'] },
        { title: 'artist:kuroboshi kouhaku', images: ['jpg_1/kuroboshi kouhaku.jpg', 'jpg_2/kuroboshi kouhaku.jpg', 'jpg_3/kuroboshi kouhaku.jpg'] },
        { title: 'artist:pigeon666', images: ['jpg_1/pigeon666.jpg', 'jpg_2/pigeon666.jpg', 'jpg_3/pigeon666.jpg'] },
        { title: 'artist:rkrk12', images: ['jpg_1/rkrk12.jpg', 'jpg_2/rkrk12.jpg', 'jpg_3/rkrk12.jpg'] },
        { title: 'artist:par0llel', images: ['jpg_1/par0llel.jpg', 'jpg_2/par0llel.jpg', 'jpg_3/par0llel.jpg'] },
        { title: 'artist:bbbs', images: ['jpg_1/bbbs.jpg', 'jpg_2/bbbs.jpg', 'jpg_3/bbbs.jpg'] },
        { title: 'artist:fight yoghurt', images: ['jpg_1/fight yoghurt.jpg', 'jpg_2/fight yoghurt.jpg', 'jpg_3/fight yoghurt.jpg'] },
        { title: 'artist:gwan-e', images: ['jpg_1/gwan-e.jpg', 'jpg_2/gwan-e.jpg', 'jpg_3/gwan-e.jpg'] },
        { title: 'artist:teddypocky', images: ['jpg_1/teddypocky.jpg', 'jpg_2/teddypocky.jpg', 'jpg_3/teddypocky.jpg'] },
        { title: 'artist:maruko tooto', images: ['jpg_1/maruko tooto.jpg', 'jpg_2/maruko tooto.jpg', 'jpg_3/maruko tooto.jpg'] },
        { title: 'artist:shuiruoqing', images: ['jpg_1/shuiruoqing.jpg', 'jpg_2/shuiruoqing.jpg', 'jpg_3/shuiruoqing.jpg'] },
        { title: 'artist:nozora yuzu', images: ['jpg_1/nozora yuzu.jpg', 'jpg_2/nozora yuzu.jpg', 'jpg_3/nozora yuzu.jpg'] },
        { title: 'artist:bartolomeobari', images: ['jpg_1/bartolomeobari.jpg', 'jpg_2/bartolomeobari.jpg', 'jpg_3/bartolomeobari.jpg'] },
        { title: 'artist:tamaki (tamaki599)', images: ['jpg_1/tamaki (tamaki599).jpg', 'jpg_2/tamaki (tamaki599).jpg', 'jpg_3/tamaki (tamaki599).jpg'] },
        { title: 'artist:kobinbin', images: ['jpg_1/kobinbin.jpg', 'jpg_2/kobinbin.jpg', 'jpg_3/kobinbin.jpg'] },
        { title: 'artist:comodox', images: ['jpg_1/comodox.jpg', 'jpg_2/comodox.jpg', 'jpg_3/comodox.jpg'] },

            // ...（30个对象的数组，每个对象包含标题和5个图片URL）
    ];

    // 渲染表格数据
    function renderTable(page) {
        tableBody.innerHTML = ''; // 清空表格体
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
        for (let i = startIndex; i < endIndex && i < totalRows; i++) {
            const row = document.createElement('tr');
    
            // 第一列：标题和添加按钮
            const titleCell = document.createElement('td');
            const titleCell_1 = document.createElement('td_1');
            titleCell_1.appendChild(document.createTextNode(` ${data[i].title}`));
            const addButton_copy = document.createElement('button');
            addButton_copy.textContent = '复制';
            addButton_copy.onclick = () => {
                const artist_tag = data[i].title + ', ';
                navigator.clipboard.writeText(artist_tag);
            };
            titleCell_1.appendChild(addButton_copy);
            titleCell.appendChild(titleCell_1);
            const titleCell_2 = document.createElement('td');
            const addButton = document.createElement('button');
            addButton.textContent = '1';
            addButton.onclick = () => {
                collectedString += data[i].title + ', ';
                updateCopyButtonAndPreview();
            };
            titleCell_2.appendChild(addButton);
            const addButton_1 = document.createElement('button');
            addButton_1.textContent = '2';
            addButton_1.onclick = () => {
                collectedString_1 += data[i].title + ', ';
                updateCopyButtonAndPreview_1();
            };
            titleCell_2.appendChild(addButton_1);
            const addButton_2 = document.createElement('button');
            addButton_2.textContent = '3';
            addButton_2.onclick = () => {
                collectedString_2 += data[i].title + ', ';
                updateCopyButtonAndPreview_2();
            };
            titleCell_2.appendChild(addButton_2);
            const addButton_3 = document.createElement('button');
            addButton_3.textContent = '4';
            addButton_3.onclick = () => {
                collectedString_3 += data[i].title + ', ';
                updateCopyButtonAndPreview_3();
            };
            titleCell_2.appendChild(addButton_3);
            const addButton_4 = document.createElement('button');
            addButton_4.textContent = '5';
            addButton_4.onclick = () => {
                collectedString_4 += data[i].title + ', ';
                updateCopyButtonAndPreview_4();
            };
            titleCell_2.appendChild(addButton_4);
            const addButton_5 = document.createElement('button');
            addButton_5.textContent = '6';
            addButton_5.onclick = () => {
                collectedString_5 += data[i].title + ', ';
                updateCopyButtonAndPreview_5();
            };
            titleCell_2.appendChild(addButton_5);
            const addButton_6 = document.createElement('button');
            addButton_6.textContent = '7';
            addButton_6.onclick = () => {
                collectedString_6 += data[i].title + ', ';
                updateCopyButtonAndPreview_6();
            };
            titleCell_2.appendChild(addButton_6);
            titleCell.appendChild(titleCell_2);
            row.appendChild(titleCell);
    
            // 其他列：图像
            for (let j = 0; j < data[i].images.length && j < 5; j++) { // 假设最多显示5张图片
                const imgCell = document.createElement('td');
                const img = document.createElement('img');
                img.src = data[i].images[j]; // 这里应该是一个完整的URL或者相对路径
                img.alt = `图片${j + 1}`;
                imgCell.appendChild(img);
                row.appendChild(imgCell);
            }
    
            tableBody.appendChild(row);
        }
        updatePaginationControls(); // 更新分页控件（如果有的话）
        updateCopyButtonAndPreview();
        updateCopyButtonAndPreview_1();
        updateCopyButtonAndPreview_2();
        updateCopyButtonAndPreview_3(); // 更新复制按钮和预览文本
        updateCopyButtonAndPreview_4();
        updateCopyButtonAndPreview_5();
        updateCopyButtonAndPreview_6();
    }
    
    // 更新复制按钮和预览文本
    function updateCopyButtonAndPreview() {
        const copyButton = document.getElementById('copy-all-button');
        const deleteButton = document.getElementById('delete-all-button');
        const stringPreview = document.getElementById('string-preview');
        stringPreview.textContent = `已收集字符串: ${collectedString.trimEnd(',')}`;
        copyButton.disabled = collectedString.trim() === '';
        deleteButton.disabled = collectedString.trim() === '';
    }
    function updateCopyButtonAndPreview_1() {
        const copyButton = document.getElementById('copy-all-button_1');
        const deleteButton = document.getElementById('delete-all-button_1');
        const stringPreview = document.getElementById('string-preview_1');
        stringPreview.textContent = `已收集字符串: ${collectedString_1.trimEnd(',')}`;
        copyButton.disabled = collectedString_1.trim() === '';
        deleteButton.disabled = collectedString_1.trim() === '';
    }
    function updateCopyButtonAndPreview_2() {
        const copyButton = document.getElementById('copy-all-button_2');
        const deleteButton = document.getElementById('delete-all-button_2');
        const stringPreview = document.getElementById('string-preview_2');
        stringPreview.textContent = `已收集字符串: ${collectedString_2.trimEnd(',')}`;
        copyButton.disabled = collectedString_2.trim() === '';
        deleteButton.disabled = collectedString_2.trim() === '';
    }
    function updateCopyButtonAndPreview_3() {
        const copyButton = document.getElementById('copy-all-button_3');
        const deleteButton = document.getElementById('delete-all-button_3');
        const stringPreview = document.getElementById('string-preview_3');
        stringPreview.textContent = `已收集字符串: ${collectedString_3.trimEnd(',')}`;
        copyButton.disabled = collectedString_3.trim() === '';
        deleteButton.disabled = collectedString_3.trim() === '';
    }
    function updateCopyButtonAndPreview_4() {
        const copyButton = document.getElementById('copy-all-button_4');
        const deleteButton = document.getElementById('delete-all-button_4');
        const stringPreview = document.getElementById('string-preview_4');
        stringPreview.textContent = `已收集字符串: ${collectedString_4.trimEnd(',')}`;
        copyButton.disabled = collectedString_4.trim() === '';
        deleteButton.disabled = collectedString_4.trim() === '';
    }
    function updateCopyButtonAndPreview_5() {
        const copyButton = document.getElementById('copy-all-button_5');
        const deleteButton = document.getElementById('delete-all-button_5');
        const stringPreview = document.getElementById('string-preview_5');
        stringPreview.textContent = `已收集字符串: ${collectedString_5.trimEnd(',')}`;
        copyButton.disabled = collectedString_5.trim() === '';
        deleteButton.disabled = collectedString_5.trim() === '';
    }
    function updateCopyButtonAndPreview_6() {
        const copyButton = document.getElementById('copy-all-button_6');
        const deleteButton = document.getElementById('delete-all-button_6');
        const stringPreview = document.getElementById('string-preview_6');
        stringPreview.textContent = `已收集字符串: ${collectedString_6.trimEnd(',')}`;
        copyButton.disabled = collectedString_6.trim() === '';
        deleteButton.disabled = collectedString_6.trim() === '';
    }
    
    // 复制字符串到剪贴板
    function copyStringToClipboard() {
        const textArea = document.createElement('textarea');
        textArea.value = collectedString;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
    function clearCollectedStrings() {
        collectedString = ''; // 重置数组
        updateCopyButtonAndPreview();
    }
    function copyStringToClipboard_1() {
        const textArea = document.createElement('textarea');
        textArea.value = collectedString_1;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

    }
    function clearCollectedStrings_1() {
        collectedString_1 = ''; // 重置数组
        updateCopyButtonAndPreview_1();

    }
    function copyStringToClipboard_2() {
        const textArea = document.createElement('textarea');
        textArea.value = collectedString_2;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

    }
    function clearCollectedStrings_2() {
        collectedString_2 = ''; // 重置数组
        updateCopyButtonAndPreview_2();

    }
    function copyStringToClipboard_3() {
        const textArea = document.createElement('textarea');
        textArea.value = collectedString_3;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

    }
    function clearCollectedStrings_3() {
        collectedString_3 = ''; // 重置数组
        updateCopyButtonAndPreview_3();

    }
    function copyStringToClipboard_4() {
        const textArea = document.createElement('textarea');
        textArea.value = collectedString_4;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

    }
    function clearCollectedStrings_4() {
        collectedString_4 = ''; // 重置数组
        updateCopyButtonAndPreview_4();

    }
    function copyStringToClipboard_5() {
        const textArea = document.createElement('textarea');
        textArea.value = collectedString_5;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

    }
    function clearCollectedStrings_5() {
        collectedString_5 = ''; // 重置数组
        updateCopyButtonAndPreview_5();

    }
    function copyStringToClipboard_6() {
        const textArea = document.createElement('textarea');
        textArea.value = collectedString_6;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

    }
    function clearCollectedStrings_6() {
        collectedString_6 = ''; // 重置数组
        updateCopyButtonAndPreview_6();

    }
    
    // 初始化复制按钮的点击事件
    document.getElementById('copy-all-button').onclick = copyStringToClipboard;
    document.getElementById('delete-all-button').onclick = clearCollectedStrings;
    document.getElementById('copy-all-button_1').onclick = copyStringToClipboard_1;
    document.getElementById('delete-all-button_1').onclick = clearCollectedStrings_1;
    document.getElementById('copy-all-button_2').onclick = copyStringToClipboard_2;
    document.getElementById('delete-all-button_2').onclick = clearCollectedStrings_2;
    document.getElementById('copy-all-button_3').onclick = copyStringToClipboard_3;
    document.getElementById('delete-all-button_3').onclick = clearCollectedStrings_3;
    document.getElementById('copy-all-button_4').onclick = copyStringToClipboard_4;
    document.getElementById('delete-all-button_4').onclick = clearCollectedStrings_4;
    document.getElementById('copy-all-button_5').onclick = copyStringToClipboard_5;
    document.getElementById('delete-all-button_5').onclick = clearCollectedStrings_5;
    document.getElementById('copy-all-button_6').onclick = copyStringToClipboard_6;
    document.getElementById('delete-all-button_6').onclick = clearCollectedStrings_6;
    

    // 更新分页控件的状态
    function updatePaginationControls() {
        firstPageButton.disabled = currentPage === 1;
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage * rowsPerPage >= totalRows;
        pageInfo.textContent = `第 ${currentPage} 页 / 共 ${Math.ceil(totalRows / rowsPerPage)} 页`;
    }

    function goToPage() {
        const pageInput = document.getElementById('page-input');
        const page = parseInt(pageInput.value, 10);
 
        if (!isNaN(page) && page > 0 && page <= Math.ceil(titles.length / rowsPerPage)) {
            currentPage = page;
            renderTable(currentPage);
        } else {
            alert('Please enter a valid page number.');
        }
    }

    // 初始化表格和分页控件
    renderTable(currentPage);

    // 分页按钮点击事件处理
    firstPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 添加平滑滚动效果
            });
            currentPage = 1;
            renderTable(currentPage);
        }
    });
    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 添加平滑滚动效果
            });
            currentPage--;
            renderTable(currentPage);
        }
    });

    nextPageButton.addEventListener('click', function() {
        if (currentPage * rowsPerPage < totalRows) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 添加平滑滚动效果
            });
            currentPage++;
            renderTable(currentPage);
        }
    });
    goPageButton.addEventListener('click', function() {
        const pageInput = document.getElementById('page-input');
        const page = parseInt(pageInput.value, 10);
 
        if (!isNaN(page) && page > 0 && page <= Math.ceil(totalRows / rowsPerPage)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 添加平滑滚动效果
            });
            currentPage = page;
            renderTable(currentPage);
        } else {
            alert('Please enter a valid page number.');
        }
    });

    document.addEventListener('keydown', function(event) {
        // 检查是否按下了方向左键（ArrowLeft）
        if (event.key === 'ArrowLeft' || event.key === 'a') {
            if (currentPage > 1) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // 添加平滑滚动效果
                });
                currentPage--;
                renderTable(currentPage);
            }
        } else if (event.key === 'ArrowRight' || event.key === 'd') {
            if (currentPage * rowsPerPage < totalRows) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // 添加平滑滚动效果
                });
                currentPage++;
                renderTable(currentPage);
            }
        }
    });

    
});