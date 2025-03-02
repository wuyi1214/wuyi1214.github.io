

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
    
    const totalRows = 171; // 总行数（示例数据，实际应动态获取）


    const tableBody = document.getElementById('table-body');
    const goPageButton = document.getElementById('go-to-page');
    const firstPageButton = document.getElementById('first-page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    // 示例数据（实际应动态获取或从服务器加载）
    const data = [

        { title: '无画风原图', images: ['og/1.png', 'og/2.png', 'og/3.png'] },
        { title: 'artist:nia (nia4294)', images: ['jpg_1/nia (nia4294).jpg', 'jpg_2/nia (nia4294).jpg', 'jpg_3/nia (nia4294).jpg'] },
        { title: 'artist:gomi (hakumaiteacher)', images: ['jpg_1/gomi (hakumaiteacher).jpg', 'jpg_2/gomi (hakumaiteacher).jpg', 'jpg_3/gomi (hakumaiteacher).jpg'] },
        { title: 'artist:niliu chahui', images: ['jpg_1/niliu chahui.jpg', 'jpg_2/niliu chahui.jpg', 'jpg_3/niliu chahui.jpg'] },
        { title: 'artist:dikko', images: ['jpg_1/dikko.jpg', 'jpg_2/dikko.jpg', 'jpg_3/dikko.jpg'] },
        { title: 'artist:dandon fuga', images: ['jpg_1/dandon fuga.jpg', 'jpg_2/dandon fuga.jpg', 'jpg_3/dandon fuga.jpg'] },
        { title: 'artist:ulrich (tagaragakuin)', images: ['jpg_1/ulrich (tagaragakuin).jpg', 'jpg_2/ulrich (tagaragakuin).jpg', 'jpg_3/ulrich (tagaragakuin).jpg'] },
        { title: 'artist:cutesexyrobutts', images: ['jpg_1/cutesexyrobutts.jpg', 'jpg_2/cutesexyrobutts.jpg', 'jpg_3/cutesexyrobutts.jpg'] },
        { title: 'artist:been', images: ['jpg_1/been.jpg', 'jpg_2/been.jpg', 'jpg_3/been.jpg'] },
        { title: 'artist:piromizu', images: ['jpg_1/piromizu.jpg', 'jpg_2/piromizu.jpg', 'jpg_3/piromizu.jpg'] },
        { title: 'artist:boingoo', images: ['jpg_1/boingoo.jpg', 'jpg_2/boingoo.jpg', 'jpg_3/boingoo.jpg'] },
        { title: 'artist:pepe (jonasan)', images: ['jpg_1/pepe (jonasan).jpg', 'jpg_2/pepe (jonasan).jpg', 'jpg_3/pepe (jonasan).jpg'] },
        { title: 'artist:nyatabe', images: ['jpg_1/nyatabe.jpg', 'jpg_2/nyatabe.jpg', 'jpg_3/nyatabe.jpg'] },
        { title: 'artist:ishikei', images: ['jpg_1/ishikei.jpg', 'jpg_2/ishikei.jpg', 'jpg_3/ishikei.jpg'] },
        { title: 'artist:miurahha', images: ['jpg_1/miurahha.jpg', 'jpg_2/miurahha.jpg', 'jpg_3/miurahha.jpg'] },
        { title: 'artist:letdie1414', images: ['jpg_1/letdie1414.jpg', 'jpg_2/letdie1414.jpg', 'jpg_3/letdie1414.jpg'] },
        { title: 'artist:love cacao', images: ['jpg_1/love cacao.jpg', 'jpg_2/love cacao.jpg', 'jpg_3/love cacao.jpg'] },
        { title: 'artist:instant ip', images: ['jpg_1/instant ip.jpg', 'jpg_2/instant ip.jpg', 'jpg_3/instant ip.jpg'] },
        { title: 'artist:qingmingtongzi', images: ['jpg_1/qingmingtongzi.jpg', 'jpg_2/qingmingtongzi.jpg', 'jpg_3/qingmingtongzi.jpg'] },
        { title: 'artist:ebifurya', images: ['jpg_1/ebifurya.jpg', 'jpg_2/ebifurya.jpg', 'jpg_3/ebifurya.jpg'] },
        { title: 'artist:wlop', images: ['jpg_1/wlop.jpg', 'jpg_2/wlop.jpg', 'jpg_3/wlop.jpg'] },
        { title: 'artist:ray-k', images: ['jpg_1/ray-k.jpg', 'jpg_2/ray-k.jpg', 'jpg_3/ray-k.jpg'] },
        { title: 'artist:sadakage', images: ['jpg_1/sadakage.jpg', 'jpg_2/sadakage.jpg', 'jpg_3/sadakage.jpg'] },
        { title: 'artist:momo no sukebe', images: ['jpg_1/momo no sukebe.jpg', 'jpg_2/momo no sukebe.jpg', 'jpg_3/momo no sukebe.jpg'] },
        { title: 'artist:freng', images: ['jpg_1/freng.jpg', 'jpg_2/freng.jpg', 'jpg_3/freng.jpg'] },
        { title: 'artist:masaki (ekakiningen)', images: ['jpg_1/masaki (ekakiningen).jpg', 'jpg_2/masaki (ekakiningen).jpg', 'jpg_3/masaki (ekakiningen).jpg'] },
        { title: 'artist:miv4t', images: ['jpg_1/miv4t.jpg', 'jpg_2/miv4t.jpg', 'jpg_3/miv4t.jpg'] },
        { title: 'artist:gibagiba', images: ['jpg_1/gibagiba.jpg', 'jpg_2/gibagiba.jpg', 'jpg_3/gibagiba.jpg'] },
        { title: 'artist:kidmo', images: ['jpg_1/kidmo.jpg', 'jpg_2/kidmo.jpg', 'jpg_3/kidmo.jpg'] },
        { title: 'artist:myoushun', images: ['jpg_1/myoushun.jpg', 'jpg_2/myoushun.jpg', 'jpg_3/myoushun.jpg'] },
        { title: 'artist:as109', images: ['jpg_1/as109.jpg', 'jpg_2/as109.jpg', 'jpg_3/as109.jpg'] },
        { title: 'artist:muk (monsieur)', images: ['jpg_1/muk (monsieur).jpg', 'jpg_2/muk (monsieur).jpg', 'jpg_3/muk (monsieur).jpg'] },
        { title: 'artist:alphonse (white datura)', images: ['jpg_1/alphonse (white datura).jpg', 'jpg_2/alphonse (white datura).jpg', 'jpg_3/alphonse (white datura).jpg'] },
        { title: 'artist:g-tz', images: ['jpg_1/g-tz.jpg', 'jpg_2/g-tz.jpg', 'jpg_3/g-tz.jpg'] },
        { title: 'artist:sakimichan', images: ['jpg_1/sakimichan.jpg', 'jpg_2/sakimichan.jpg', 'jpg_3/sakimichan.jpg'] },
        { title: 'artist:yapo (croquis side)', images: ['jpg_1/yapo (croquis side).jpg', 'jpg_2/yapo (croquis side).jpg', 'jpg_3/yapo (croquis side).jpg'] },
        { title: 'artist:gemba (dlfms75)', images: ['jpg_1/gemba (dlfms75).jpg', 'jpg_2/gemba (dlfms75).jpg', 'jpg_3/gemba (dlfms75).jpg'] },
        { title: 'artist:derauea', images: ['jpg_1/derauea.jpg', 'jpg_2/derauea.jpg', 'jpg_3/derauea.jpg'] },
        { title: 'artist:nekodayo22', images: ['jpg_1/nekodayo22.jpg', 'jpg_2/nekodayo22.jpg', 'jpg_3/nekodayo22.jpg'] },
        { title: 'artist:ame (uten cancel)', images: ['jpg_1/ame (uten cancel).jpg', 'jpg_2/ame (uten cancel).jpg', 'jpg_3/ame (uten cancel).jpg'] },
        { title: 'artist:milin (orange maru)', images: ['jpg_1/milin (orange maru).jpg', 'jpg_2/milin (orange maru).jpg', 'jpg_3/milin (orange maru).jpg'] },
        { title: 'artist:bnari', images: ['jpg_1/bnari.jpg', 'jpg_2/bnari.jpg', 'jpg_3/bnari.jpg'] },
        { title: 'artist:nomapang', images: ['jpg_1/nomapang.jpg', 'jpg_2/nomapang.jpg', 'jpg_3/nomapang.jpg'] },
        { title: 'artist:betabeet', images: ['jpg_1/betabeet.jpg', 'jpg_2/betabeet.jpg', 'jpg_3/betabeet.jpg'] },
        { title: 'artist:jagoo', images: ['jpg_1/jagoo.jpg', 'jpg_2/jagoo.jpg', 'jpg_3/jagoo.jpg'] },
        { title: 'artist:yamataka', images: ['jpg_1/yamataka.jpg', 'jpg_2/yamataka.jpg', 'jpg_3/yamataka.jpg'] },
        { title: 'artist:feipin zhanshi', images: ['jpg_1/feipin zhanshi.jpg', 'jpg_2/feipin zhanshi.jpg', 'jpg_3/feipin zhanshi.jpg'] },
        { title: 'artist:zaphn', images: ['jpg_1/zaphn.jpg', 'jpg_2/zaphn.jpg', 'jpg_3/zaphn.jpg'] },
        { title: 'artist:kazane-wind', images: ['jpg_1/kazane-wind.jpg', 'jpg_2/kazane-wind.jpg', 'jpg_3/kazane-wind.jpg'] },
        { title: 'artist:yusha m', images: ['jpg_1/yusha m.jpg', 'jpg_2/yusha m.jpg', 'jpg_3/yusha m.jpg'] },
        { title: 'artist:stone (ksorede)', images: ['jpg_1/stone (ksorede).jpg', 'jpg_2/stone (ksorede).jpg', 'jpg_3/stone (ksorede).jpg'] },
        { title: 'artist:wei (promise 0820)', images: ['jpg_1/wei (promise 0820).jpg', 'jpg_2/wei (promise 0820).jpg', 'jpg_3/wei (promise 0820).jpg'] },
        { title: 'artist:meekohopanes', images: ['jpg_1/meekohopanes.jpg', 'jpg_2/meekohopanes.jpg', 'jpg_3/meekohopanes.jpg'] },
        { title: 'artist:susukawa (susucawa)', images: ['jpg_1/susukawa (susucawa).jpg', 'jpg_2/susukawa (susucawa).jpg', 'jpg_3/susukawa (susucawa).jpg'] },
        { title: 'artist:ginhaha', images: ['jpg_1/ginhaha.jpg', 'jpg_2/ginhaha.jpg', 'jpg_3/ginhaha.jpg'] },
        { title: 'artist:nixeu', images: ['jpg_1/nixeu.jpg', 'jpg_2/nixeu.jpg', 'jpg_3/nixeu.jpg'] },
        { title: 'artist:ebi 193', images: ['jpg_1/ebi 193.jpg', 'jpg_2/ebi 193.jpg', 'jpg_3/ebi 193.jpg'] },
        { title: 'artist:kilye kairi', images: ['jpg_1/kilye kairi.jpg', 'jpg_2/kilye kairi.jpg', 'jpg_3/kilye kairi.jpg'] },
        { title: 'artist:fumio (rsqkr)', images: ['jpg_1/fumio (rsqkr).jpg', 'jpg_2/fumio (rsqkr).jpg', 'jpg_3/fumio (rsqkr).jpg'] },
        { title: 'artist:imizu (nitro unknown)', images: ['jpg_1/imizu (nitro unknown).jpg', 'jpg_2/imizu (nitro unknown).jpg', 'jpg_3/imizu (nitro unknown).jpg'] },
        { title: 'artist:luminyu', images: ['jpg_1/luminyu.jpg', 'jpg_2/luminyu.jpg', 'jpg_3/luminyu.jpg'] },
        { title: 'artist:aleriia v', images: ['jpg_1/aleriia v.jpg', 'jpg_2/aleriia v.jpg', 'jpg_3/aleriia v.jpg'] },
        { title: 'artist:tokkyu', images: ['jpg_1/tokkyu.jpg', 'jpg_2/tokkyu.jpg', 'jpg_3/tokkyu.jpg'] },
        { title: 'artist:tokunaga akimasa', images: ['jpg_1/tokunaga akimasa.jpg', 'jpg_2/tokunaga akimasa.jpg', 'jpg_3/tokunaga akimasa.jpg'] },
        { title: 'artist:nishieda', images: ['jpg_1/nishieda.jpg', 'jpg_2/nishieda.jpg', 'jpg_3/nishieda.jpg'] },
        { title: 'artist:soleil (soleilmtfbwy03)', images: ['jpg_1/soleil (soleilmtfbwy03).jpg', 'jpg_2/soleil (soleilmtfbwy03).jpg', 'jpg_3/soleil (soleilmtfbwy03).jpg'] },
        { title: 'artist:hakonnbo', images: ['jpg_1/hakonnbo.jpg', 'jpg_2/hakonnbo.jpg', 'jpg_3/hakonnbo.jpg'] },
        { title: 'artist:ryuuforkaf', images: ['jpg_1/ryuuforkaf.jpg', 'jpg_2/ryuuforkaf.jpg', 'jpg_3/ryuuforkaf.jpg'] },
        { title: 'artist:mintice (asatsukimint)', images: ['jpg_1/mintice (asatsukimint).jpg', 'jpg_2/mintice (asatsukimint).jpg', 'jpg_3/mintice (asatsukimint).jpg'] },
        { title: 'artist:potion (moudamepo)', images: ['jpg_1/potion (moudamepo).jpg', 'jpg_2/potion (moudamepo).jpg', 'jpg_3/potion (moudamepo).jpg'] },
        { title: 'artist:mx2j', images: ['jpg_1/mx2j.jpg', 'jpg_2/mx2j.jpg', 'jpg_3/mx2j.jpg'] },
        { title: 'artist:b-pang', images: ['jpg_1/b-pang.jpg', 'jpg_2/b-pang.jpg', 'jpg_3/b-pang.jpg'] },
        { title: 'artist:leviathan (hikinito0902)', images: ['jpg_1/leviathan (hikinito0902).jpg', 'jpg_2/leviathan (hikinito0902).jpg', 'jpg_3/leviathan (hikinito0902).jpg'] },
        { title: 'artist:wanke', images: ['jpg_1/wanke.jpg', 'jpg_2/wanke.jpg', 'jpg_3/wanke.jpg'] },
        { title: 'artist:quasarcake', images: ['jpg_1/quasarcake.jpg', 'jpg_2/quasarcake.jpg', 'jpg_3/quasarcake.jpg'] },
        { title: 'artist:asakuraf', images: ['jpg_1/asakuraf.jpg', 'jpg_2/asakuraf.jpg', 'jpg_3/asakuraf.jpg'] },
        { title: 'artist:melon22', images: ['jpg_1/melon22.jpg', 'jpg_2/melon22.jpg', 'jpg_3/melon22.jpg'] },
        { title: 'artist:amania orz', images: ['jpg_1/amania orz.jpg', 'jpg_2/amania orz.jpg', 'jpg_3/amania orz.jpg'] },
        { title: 'artist:meion', images: ['jpg_1/meion.jpg', 'jpg_2/meion.jpg', 'jpg_3/meion.jpg'] },
        { title: 'artist:nababa', images: ['jpg_1/nababa.jpg', 'jpg_2/nababa.jpg', 'jpg_3/nababa.jpg'] },
        { title: 'artist:ibara dance', images: ['jpg_1/ibara dance.jpg', 'jpg_2/ibara dance.jpg', 'jpg_3/ibara dance.jpg'] },
        { title: 'artist:kim hyung tae', images: ['jpg_1/kim hyung tae.jpg', 'jpg_2/kim hyung tae.jpg', 'jpg_3/kim hyung tae.jpg'] },
        { title: 'artist:agoto', images: ['jpg_1/agoto.jpg', 'jpg_2/agoto.jpg', 'jpg_3/agoto.jpg'] },
        { title: 'artist:niur', images: ['jpg_1/niur.jpg', 'jpg_2/niur.jpg', 'jpg_3/niur.jpg'] },
        { title: 'artist:saboten teishoku', images: ['jpg_1/saboten teishoku.jpg', 'jpg_2/saboten teishoku.jpg', 'jpg_3/saboten teishoku.jpg'] },
        { title: 'artist:shimhaq', images: ['jpg_1/shimhaq.jpg', 'jpg_2/shimhaq.jpg', 'jpg_3/shimhaq.jpg'] },
        { title: 'artist:chyoel', images: ['jpg_1/chyoel.jpg', 'jpg_2/chyoel.jpg', 'jpg_3/chyoel.jpg'] },
        { title: 'artist:suzumi (ccroquette)', images: ['jpg_1/suzumi (ccroquette).jpg', 'jpg_2/suzumi (ccroquette).jpg', 'jpg_3/suzumi (ccroquette).jpg'] },
        { title: 'artist:enma (enmanuelart)', images: ['jpg_1/enma (enmanuelart).jpg', 'jpg_2/enma (enmanuelart).jpg', 'jpg_3/enma (enmanuelart).jpg'] },
        { title: 'artist:aoi sakura (seak5545)', images: ['jpg_1/aoi sakura (seak5545).jpg', 'jpg_2/aoi sakura (seak5545).jpg', 'jpg_3/aoi sakura (seak5545).jpg'] },
        { title: 'artist:wjs07', images: ['jpg_1/wjs07.jpg', 'jpg_2/wjs07.jpg', 'jpg_3/wjs07.jpg'] },
        { title: 'artist:eu03', images: ['jpg_1/eu03.jpg', 'jpg_2/eu03.jpg', 'jpg_3/eu03.jpg'] },
        { title: 'artist:taitai', images: ['jpg_1/taitai.jpg', 'jpg_2/taitai.jpg', 'jpg_3/taitai.jpg'] },
        { title: 'artist:zuizi', images: ['jpg_1/zuizi.jpg', 'jpg_2/zuizi.jpg', 'jpg_3/zuizi.jpg'] },
        { title: 'artist:qizhu', images: ['jpg_1/qizhu.jpg', 'jpg_2/qizhu.jpg', 'jpg_3/qizhu.jpg'] },
        { title: 'artist:gorgeous mushroom', images: ['jpg_1/gorgeous mushroom.jpg', 'jpg_2/gorgeous mushroom.jpg', 'jpg_3/gorgeous mushroom.jpg'] },
        { title: 'artist:azure (capriccio)', images: ['jpg_1/azure (capriccio).jpg', 'jpg_2/azure (capriccio).jpg', 'jpg_3/azure (capriccio).jpg'] },
        { title: 'artist:sayori (neko works)', images: ['jpg_1/sayori (neko works).jpg', 'jpg_2/sayori (neko works).jpg', 'jpg_3/sayori (neko works).jpg'] },
        { title: 'artist:mohaka (m 0haka)', images: ['jpg_1/mohaka (m 0haka).jpg', 'jpg_2/mohaka (m 0haka).jpg', 'jpg_3/mohaka (m 0haka).jpg'] },
        { title: 'artist:rhine (overtonerhine)', images: ['jpg_1/rhine (overtonerhine).jpg', 'jpg_2/rhine (overtonerhine).jpg', 'jpg_3/rhine (overtonerhine).jpg'] },
        { title: 'artist:myluche', images: ['jpg_1/myluche.jpg', 'jpg_2/myluche.jpg', 'jpg_3/myluche.jpg'] },
        { title: 'artist:suujiniku', images: ['jpg_1/suujiniku.jpg', 'jpg_2/suujiniku.jpg', 'jpg_3/suujiniku.jpg'] },
        { title: 'artist:meltyrice', images: ['jpg_1/meltyrice.jpg', 'jpg_2/meltyrice.jpg', 'jpg_3/meltyrice.jpg'] },
        { title: 'artist:smile (qd4nsvik)', images: ['jpg_1/smile (qd4nsvik).jpg', 'jpg_2/smile (qd4nsvik).jpg', 'jpg_3/smile (qd4nsvik).jpg'] },
        { title: 'artist:laserflip', images: ['jpg_1/laserflip.jpg', 'jpg_2/laserflip.jpg', 'jpg_3/laserflip.jpg'] },
        { title: 'artist:rhasta', images: ['jpg_1/rhasta.jpg', 'jpg_2/rhasta.jpg', 'jpg_3/rhasta.jpg'] },
        { title: 'artist:kim eb', images: ['jpg_1/kim eb.jpg', 'jpg_2/kim eb.jpg', 'jpg_3/kim eb.jpg'] },
        { title: 'artist:hwan (verypoor)', images: ['jpg_1/hwan (verypoor).jpg', 'jpg_2/hwan (verypoor).jpg', 'jpg_3/hwan (verypoor).jpg'] },
        { title: 'artist:liduke', images: ['jpg_1/liduke.jpg', 'jpg_2/liduke.jpg', 'jpg_3/liduke.jpg'] },
        { title: 'artist:hitomaru', images: ['jpg_1/hitomaru.jpg', 'jpg_2/hitomaru.jpg', 'jpg_3/hitomaru.jpg'] },
        { title: 'artist:tidsean', images: ['jpg_1/tidsean.jpg', 'jpg_2/tidsean.jpg', 'jpg_3/tidsean.jpg'] },
        { title: 'artist:rolua', images: ['jpg_1/rolua.jpg', 'jpg_2/rolua.jpg', 'jpg_3/rolua.jpg'] },
        { title: 'artist:qys3', images: ['jpg_1/qys3.jpg', 'jpg_2/qys3.jpg', 'jpg_3/qys3.jpg'] },
        { title: 'artist:amasora taichi', images: ['jpg_1/amasora taichi.jpg', 'jpg_2/amasora taichi.jpg', 'jpg_3/amasora taichi.jpg'] },
        { title: 'artist:ikemeru19', images: ['jpg_1/ikemeru19.jpg', 'jpg_2/ikemeru19.jpg', 'jpg_3/ikemeru19.jpg'] },
        { title: 'artist:smewed', images: ['jpg_1/smewed.jpg', 'jpg_2/smewed.jpg', 'jpg_3/smewed.jpg'] },
        { title: 'artist:hizuki akira', images: ['jpg_1/hizuki akira.jpg', 'jpg_2/hizuki akira.jpg', 'jpg_3/hizuki akira.jpg'] },
        { title: 'artist:ibenz009', images: ['jpg_1/ibenz009.jpg', 'jpg_2/ibenz009.jpg', 'jpg_3/ibenz009.jpg'] },
        { title: 'artist:sade abyss', images: ['jpg_1/sade abyss.jpg', 'jpg_2/sade abyss.jpg', 'jpg_3/sade abyss.jpg'] },
        { title: 'artist:rindou (radical dream)', images: ['jpg_1/rindou (radical dream).jpg', 'jpg_2/rindou (radical dream).jpg', 'jpg_3/rindou (radical dream).jpg'] },
        { title: 'artist:jornyhail', images: ['jpg_1/jornyhail.jpg', 'jpg_2/jornyhail.jpg', 'jpg_3/jornyhail.jpg'] },
        { title: 'artist:ctrlz77', images: ['jpg_1/ctrlz77.jpg', 'jpg_2/ctrlz77.jpg', 'jpg_3/ctrlz77.jpg'] },
        { title: 'artist:osiimi', images: ['jpg_1/osiimi.jpg', 'jpg_2/osiimi.jpg', 'jpg_3/osiimi.jpg'] },
        { title: 'artist:alber', images: ['jpg_1/alber.jpg', 'jpg_2/alber.jpg', 'jpg_3/alber.jpg'] },
        { title: 'artist:taesi', images: ['jpg_1/taesi.jpg', 'jpg_2/taesi.jpg', 'jpg_3/taesi.jpg'] },
        { title: 'artist:garuku', images: ['jpg_1/garuku.jpg', 'jpg_2/garuku.jpg', 'jpg_3/garuku.jpg'] },
        { title: 'artist:aster crowley', images: ['jpg_1/aster crowley.jpg', 'jpg_2/aster crowley.jpg', 'jpg_3/aster crowley.jpg'] },
        { title: 'artist:himitsu (hi mi tsu 2)', images: ['jpg_1/himitsu (hi mi tsu 2).jpg', 'jpg_2/himitsu (hi mi tsu 2).jpg', 'jpg_3/himitsu (hi mi tsu 2).jpg'] },
        { title: 'artist:haneru', images: ['jpg_1/haneru.jpg', 'jpg_2/haneru.jpg', 'jpg_3/haneru.jpg'] },
        { title: 'artist:murata range', images: ['jpg_1/murata range.jpg', 'jpg_2/murata range.jpg', 'jpg_3/murata range.jpg'] },
        { title: 'artist:shion (mirudakemann)', images: ['jpg_1/shion (mirudakemann).jpg', 'jpg_2/shion (mirudakemann).jpg', 'jpg_3/shion (mirudakemann).jpg'] },
        { title: 'artist:feral lemma', images: ['jpg_1/feral lemma.jpg', 'jpg_2/feral lemma.jpg', 'jpg_3/feral lemma.jpg'] },
        { title: 'artist:kawacy', images: ['jpg_1/kawacy.jpg', 'jpg_2/kawacy.jpg', 'jpg_3/kawacy.jpg'] },
        { title: 'artist:dk.senie', images: ['jpg_1/dk.senie.jpg', 'jpg_2/dk.senie.jpg', 'jpg_3/dk.senie.jpg'] },
        { title: 'artist:free style (yohan1754)', images: ['jpg_1/free style (yohan1754).jpg', 'jpg_2/free style (yohan1754).jpg', 'jpg_3/free style (yohan1754).jpg'] },
        { title: 'artist:nephlite', images: ['jpg_1/nephlite.jpg', 'jpg_2/nephlite.jpg', 'jpg_3/nephlite.jpg'] },
        { title: 'artist:jeneral', images: ['jpg_1/jeneral.jpg', 'jpg_2/jeneral.jpg', 'jpg_3/jeneral.jpg'] },
        { title: 'artist:aki99', images: ['jpg_1/aki99.jpg', 'jpg_2/aki99.jpg', 'jpg_3/aki99.jpg'] },
        { title: 'artist:lm7 (op-center)', images: ['jpg_1/lm7 (op-center).jpg', 'jpg_2/lm7 (op-center).jpg', 'jpg_3/lm7 (op-center).jpg'] },
        { title: 'artist:hakkasame', images: ['jpg_1/hakkasame.jpg', 'jpg_2/hakkasame.jpg', 'jpg_3/hakkasame.jpg'] },
        { title: 'artist:nekoguchi', images: ['jpg_1/nekoguchi.jpg', 'jpg_2/nekoguchi.jpg', 'jpg_3/nekoguchi.jpg'] },
        { title: 'artist:curss', images: ['jpg_1/curss.jpg', 'jpg_2/curss.jpg', 'jpg_3/curss.jpg'] },
        { title: 'artist:rourou (been)', images: ['jpg_1/rourou (been).jpg', 'jpg_2/rourou (been).jpg', 'jpg_3/rourou (been).jpg'] },
        { title: 'artist:yunsang', images: ['jpg_1/yunsang.jpg', 'jpg_2/yunsang.jpg', 'jpg_3/yunsang.jpg'] },
        { title: 'artist:wangchuan de quanyan', images: ['jpg_1/wangchuan de quanyan.jpg', 'jpg_2/wangchuan de quanyan.jpg', 'jpg_3/wangchuan de quanyan.jpg'] },
        { title: 'artist:milkychu', images: ['jpg_1/milkychu.jpg', 'jpg_2/milkychu.jpg', 'jpg_3/milkychu.jpg'] },
        { title: 'artist:stu dts', images: ['jpg_1/stu dts.jpg', 'jpg_2/stu dts.jpg', 'jpg_3/stu dts.jpg'] },
        { title: 'artist:sbgu', images: ['jpg_1/sbgu.jpg', 'jpg_2/sbgu.jpg', 'jpg_3/sbgu.jpg'] },
        { title: 'artist:guweiz', images: ['jpg_1/guweiz.jpg', 'jpg_2/guweiz.jpg', 'jpg_3/guweiz.jpg'] },
        { title: 'artist:rustle', images: ['jpg_1/rustle.jpg', 'jpg_2/rustle.jpg', 'jpg_3/rustle.jpg'] },
        { title: 'artist:poharo', images: ['jpg_1/poharo.jpg', 'jpg_2/poharo.jpg', 'jpg_3/poharo.jpg'] },
        { title: 'artist:yago8 pp3', images: ['jpg_1/yago8 pp3.jpg', 'jpg_2/yago8 pp3.jpg', 'jpg_3/yago8 pp3.jpg'] },
        { title: 'artist:jonpei', images: ['jpg_1/jonpei.jpg', 'jpg_2/jonpei.jpg', 'jpg_3/jonpei.jpg'] },
        { title: 'artist:tsuji santa', images: ['jpg_1/tsuji santa.jpg', 'jpg_2/tsuji santa.jpg', 'jpg_3/tsuji santa.jpg'] },
        { title: 'artist:eruu (eruuman)', images: ['jpg_1/eruu (eruuman).jpg', 'jpg_2/eruu (eruuman).jpg', 'jpg_3/eruu (eruuman).jpg'] },
        { title: 'artist:nat the lich', images: ['jpg_1/nat the lich.jpg', 'jpg_2/nat the lich.jpg', 'jpg_3/nat the lich.jpg'] },
        { title: 'artist:crumbles', images: ['jpg_1/crumbles.jpg', 'jpg_2/crumbles.jpg', 'jpg_3/crumbles.jpg'] },
        { title: 'artist:prywinko', images: ['jpg_1/prywinko.jpg', 'jpg_2/prywinko.jpg', 'jpg_3/prywinko.jpg'] },
        { title: 'artist:pigeon666', images: ['jpg_1/pigeon666.jpg', 'jpg_2/pigeon666.jpg', 'jpg_3/pigeon666.jpg'] },
        { title: 'artist:rkrk12', images: ['jpg_1/rkrk12.jpg', 'jpg_2/rkrk12.jpg', 'jpg_3/rkrk12.jpg'] },
        { title: 'artist:ganet p', images: ['jpg_1/ganet p.jpg', 'jpg_2/ganet p.jpg', 'jpg_3/ganet p.jpg'] },
        { title: 'artist:mako (makoda)', images: ['jpg_1/mako (makoda).jpg', 'jpg_2/mako (makoda).jpg', 'jpg_3/mako (makoda).jpg'] },
        { title: 'artist:bbbs', images: ['jpg_1/bbbs.jpg', 'jpg_2/bbbs.jpg', 'jpg_3/bbbs.jpg'] },
        { title: 'artist:elleciel.eud', images: ['jpg_1/elleciel.eud.jpg', 'jpg_2/elleciel.eud.jpg', 'jpg_3/elleciel.eud.jpg'] },
        { title: 'artist:bwcloud', images: ['jpg_1/bwcloud.jpg', 'jpg_2/bwcloud.jpg', 'jpg_3/bwcloud.jpg'] },
        { title: 'artist:shuiruoqing', images: ['jpg_1/shuiruoqing.jpg', 'jpg_2/shuiruoqing.jpg', 'jpg_3/shuiruoqing.jpg'] },
        { title: 'artist:liang xing', images: ['jpg_1/liang xing.jpg', 'jpg_2/liang xing.jpg', 'jpg_3/liang xing.jpg'] },
        { title: 'artist:turbulence', images: ['jpg_1/turbulence.jpg', 'jpg_2/turbulence.jpg', 'jpg_3/turbulence.jpg'] },
        { title: 'artist:tamaki (tamaki599)', images: ['jpg_1/tamaki (tamaki599).jpg', 'jpg_2/tamaki (tamaki599).jpg', 'jpg_3/tamaki (tamaki599).jpg'] },
        { title: 'artist:m.q (mqkyrie)', images: ['jpg_1/m.q (mqkyrie).jpg', 'jpg_2/m.q (mqkyrie).jpg', 'jpg_3/m.q (mqkyrie).jpg'] },
        { title: 'artist:bbc-chan', images: ['jpg_1/bbc-chan.jpg', 'jpg_2/bbc-chan.jpg', 'jpg_3/bbc-chan.jpg'] },

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