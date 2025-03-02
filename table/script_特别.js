

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
    
    const totalRows = 187; // 总行数（示例数据，实际应动态获取）


    const tableBody = document.getElementById('table-body');
    const goPageButton = document.getElementById('go-to-page');
    const firstPageButton = document.getElementById('first-page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    // 示例数据（实际应动态获取或从服务器加载）
    const data = [

        { title: '无画风原图', images: ['og/1.png', 'og/2.png', 'og/3.png'] },
        { title: 'artist:konoshige (ryuun)', images: ['jpg_1/konoshige (ryuun).jpg', 'jpg_2/konoshige (ryuun).jpg', 'jpg_3/konoshige (ryuun).jpg'] },
        { title: 'artist:dandon fuga', images: ['jpg_1/dandon fuga.jpg', 'jpg_2/dandon fuga.jpg', 'jpg_3/dandon fuga.jpg'] },
        { title: 'artist:cutesexyrobutts', images: ['jpg_1/cutesexyrobutts.jpg', 'jpg_2/cutesexyrobutts.jpg', 'jpg_3/cutesexyrobutts.jpg'] },
        { title: 'artist:thirty 8ght', images: ['jpg_1/thirty 8ght.jpg', 'jpg_2/thirty 8ght.jpg', 'jpg_3/thirty 8ght.jpg'] },
        { title: 'artist:khyle.', images: ['jpg_1/khyle..jpg', 'jpg_2/khyle..jpg', 'jpg_3/khyle..jpg'] },
        { title: 'artist:reagan long', images: ['jpg_1/reagan long.jpg', 'jpg_2/reagan long.jpg', 'jpg_3/reagan long.jpg'] },
        { title: 'artist:murakami suigun', images: ['jpg_1/murakami suigun.jpg', 'jpg_2/murakami suigun.jpg', 'jpg_3/murakami suigun.jpg'] },
        { title: 'artist:letdie1414', images: ['jpg_1/letdie1414.jpg', 'jpg_2/letdie1414.jpg', 'jpg_3/letdie1414.jpg'] },
        { title: 'artist:nironiro', images: ['jpg_1/nironiro.jpg', 'jpg_2/nironiro.jpg', 'jpg_3/nironiro.jpg'] },
        { title: 'artist:aji (sakanaaj1)', images: ['jpg_1/aji (sakanaaj1).jpg', 'jpg_2/aji (sakanaaj1).jpg', 'jpg_3/aji (sakanaaj1).jpg'] },
        { title: 'artist:wlop', images: ['jpg_1/wlop.jpg', 'jpg_2/wlop.jpg', 'jpg_3/wlop.jpg'] },
        { title: 'artist:chowbie', images: ['jpg_1/chowbie.jpg', 'jpg_2/chowbie.jpg', 'jpg_3/chowbie.jpg'] },
        { title: 'artist:ray-k', images: ['jpg_1/ray-k.jpg', 'jpg_2/ray-k.jpg', 'jpg_3/ray-k.jpg'] },
        { title: 'artist:bada (jksh5056)', images: ['jpg_1/bada (jksh5056).jpg', 'jpg_2/bada (jksh5056).jpg', 'jpg_3/bada (jksh5056).jpg'] },
        { title: 'artist:dishwasher1910', images: ['jpg_1/dishwasher1910.jpg', 'jpg_2/dishwasher1910.jpg', 'jpg_3/dishwasher1910.jpg'] },
        { title: 'artist:freng', images: ['jpg_1/freng.jpg', 'jpg_2/freng.jpg', 'jpg_3/freng.jpg'] },
        { title: 'artist:masaki (ekakiningen)', images: ['jpg_1/masaki (ekakiningen).jpg', 'jpg_2/masaki (ekakiningen).jpg', 'jpg_3/masaki (ekakiningen).jpg'] },
        { title: 'artist:fuzichoco', images: ['jpg_1/fuzichoco.jpg', 'jpg_2/fuzichoco.jpg', 'jpg_3/fuzichoco.jpg'] },
        { title: 'artist:monety', images: ['jpg_1/monety.jpg', 'jpg_2/monety.jpg', 'jpg_3/monety.jpg'] },
        { title: 'artist:gozaru', images: ['jpg_1/gozaru.jpg', 'jpg_2/gozaru.jpg', 'jpg_3/gozaru.jpg'] },
        { title: 'artist:asanagi', images: ['jpg_1/asanagi.jpg', 'jpg_2/asanagi.jpg', 'jpg_3/asanagi.jpg'] },
        { title: 'artist:as109', images: ['jpg_1/as109.jpg', 'jpg_2/as109.jpg', 'jpg_3/as109.jpg'] },
        { title: 'artist:muk (monsieur)', images: ['jpg_1/muk (monsieur).jpg', 'jpg_2/muk (monsieur).jpg', 'jpg_3/muk (monsieur).jpg'] },
        { title: 'artist:alphonse (white datura)', images: ['jpg_1/alphonse (white datura).jpg', 'jpg_2/alphonse (white datura).jpg', 'jpg_3/alphonse (white datura).jpg'] },
        { title: 'artist:fei (maidoll)', images: ['jpg_1/fei (maidoll).jpg', 'jpg_2/fei (maidoll).jpg', 'jpg_3/fei (maidoll).jpg'] },
        { title: 'artist:g-tz', images: ['jpg_1/g-tz.jpg', 'jpg_2/g-tz.jpg', 'jpg_3/g-tz.jpg'] },
        { title: 'artist:sakimichan', images: ['jpg_1/sakimichan.jpg', 'jpg_2/sakimichan.jpg', 'jpg_3/sakimichan.jpg'] },
        { title: 'artist:sakiyamama', images: ['jpg_1/sakiyamama.jpg', 'jpg_2/sakiyamama.jpg', 'jpg_3/sakiyamama.jpg'] },
        { title: 'artist:puririn', images: ['jpg_1/puririn.jpg', 'jpg_2/puririn.jpg', 'jpg_3/puririn.jpg'] },
        { title: 'artist:wagashi (dagashiya)', images: ['jpg_1/wagashi (dagashiya).jpg', 'jpg_2/wagashi (dagashiya).jpg', 'jpg_3/wagashi (dagashiya).jpg'] },
        { title: 'artist:gemba (dlfms75)', images: ['jpg_1/gemba (dlfms75).jpg', 'jpg_2/gemba (dlfms75).jpg', 'jpg_3/gemba (dlfms75).jpg'] },
        { title: 'artist:torishu (kumataka 4867)', images: ['jpg_1/torishu (kumataka 4867).jpg', 'jpg_2/torishu (kumataka 4867).jpg', 'jpg_3/torishu (kumataka 4867).jpg'] },
        { title: 'artist:echj', images: ['jpg_1/echj.jpg', 'jpg_2/echj.jpg', 'jpg_3/echj.jpg'] },
        { title: 'artist:mamimi (mamamimi)', images: ['jpg_1/mamimi (mamamimi).jpg', 'jpg_2/mamimi (mamamimi).jpg', 'jpg_3/mamimi (mamamimi).jpg'] },
        { title: 'artist:sawaya (mizukazu)', images: ['jpg_1/sawaya (mizukazu).jpg', 'jpg_2/sawaya (mizukazu).jpg', 'jpg_3/sawaya (mizukazu).jpg'] },
        { title: 'artist:edmun6969', images: ['jpg_1/edmun6969.jpg', 'jpg_2/edmun6969.jpg', 'jpg_3/edmun6969.jpg'] },
        { title: 'artist:leonmandala', images: ['jpg_1/leonmandala.jpg', 'jpg_2/leonmandala.jpg', 'jpg_3/leonmandala.jpg'] },
        { title: 'artist:jack dempa', images: ['jpg_1/jack dempa.jpg', 'jpg_2/jack dempa.jpg', 'jpg_3/jack dempa.jpg'] },
        { title: 'artist:nikuatsu magician shinbo', images: ['jpg_1/nikuatsu magician shinbo.jpg', 'jpg_2/nikuatsu magician shinbo.jpg', 'jpg_3/nikuatsu magician shinbo.jpg'] },
        { title: 'artist:zaphn', images: ['jpg_1/zaphn.jpg', 'jpg_2/zaphn.jpg', 'jpg_3/zaphn.jpg'] },
        { title: 'artist:kazane-wind', images: ['jpg_1/kazane-wind.jpg', 'jpg_2/kazane-wind.jpg', 'jpg_3/kazane-wind.jpg'] },
        { title: 'artist:mario (mario portal)', images: ['jpg_1/mario (mario portal).jpg', 'jpg_2/mario (mario portal).jpg', 'jpg_3/mario (mario portal).jpg'] },
        { title: 'artist:meekohopanes', images: ['jpg_1/meekohopanes.jpg', 'jpg_2/meekohopanes.jpg', 'jpg_3/meekohopanes.jpg'] },
        { title: 'artist:matsunaga kouyou', images: ['jpg_1/matsunaga kouyou.jpg', 'jpg_2/matsunaga kouyou.jpg', 'jpg_3/matsunaga kouyou.jpg'] },
        { title: 'artist:hara (harayutaka)', images: ['jpg_1/hara (harayutaka).jpg', 'jpg_2/hara (harayutaka).jpg', 'jpg_3/hara (harayutaka).jpg'] },
        { title: 'artist:slugbox', images: ['jpg_1/slugbox.jpg', 'jpg_2/slugbox.jpg', 'jpg_3/slugbox.jpg'] },
        { title: 'artist:nyantcha', images: ['jpg_1/nyantcha.jpg', 'jpg_2/nyantcha.jpg', 'jpg_3/nyantcha.jpg'] },
        { title: 'artist:tsuda nanafushi', images: ['jpg_1/tsuda nanafushi.jpg', 'jpg_2/tsuda nanafushi.jpg', 'jpg_3/tsuda nanafushi.jpg'] },
        { title: 'artist:fumihiko (fu mihi ko)', images: ['jpg_1/fumihiko (fu mihi ko).jpg', 'jpg_2/fumihiko (fu mihi ko).jpg', 'jpg_3/fumihiko (fu mihi ko).jpg'] },
        { title: 'artist:merunyaa', images: ['jpg_1/merunyaa.jpg', 'jpg_2/merunyaa.jpg', 'jpg_3/merunyaa.jpg'] },
        { title: 'artist:chanta (ayatakaoisii)', images: ['jpg_1/chanta (ayatakaoisii).jpg', 'jpg_2/chanta (ayatakaoisii).jpg', 'jpg_3/chanta (ayatakaoisii).jpg'] },
        { title: 'artist:kaamin (mariarose753)', images: ['jpg_1/kaamin (mariarose753).jpg', 'jpg_2/kaamin (mariarose753).jpg', 'jpg_3/kaamin (mariarose753).jpg'] },
        { title: 'artist:phantom ix row', images: ['jpg_1/phantom ix row.jpg', 'jpg_2/phantom ix row.jpg', 'jpg_3/phantom ix row.jpg'] },
        { title: 'artist:fumio (rsqkr)', images: ['jpg_1/fumio (rsqkr).jpg', 'jpg_2/fumio (rsqkr).jpg', 'jpg_3/fumio (rsqkr).jpg'] },
        { title: 'artist:imizu (nitro unknown)', images: ['jpg_1/imizu (nitro unknown).jpg', 'jpg_2/imizu (nitro unknown).jpg', 'jpg_3/imizu (nitro unknown).jpg'] },
        { title: 'artist:luminyu', images: ['jpg_1/luminyu.jpg', 'jpg_2/luminyu.jpg', 'jpg_3/luminyu.jpg'] },
        { title: 'artist:aleriia v', images: ['jpg_1/aleriia v.jpg', 'jpg_2/aleriia v.jpg', 'jpg_3/aleriia v.jpg'] },
        { title: 'artist:kelvin hiu', images: ['jpg_1/kelvin hiu.jpg', 'jpg_2/kelvin hiu.jpg', 'jpg_3/kelvin hiu.jpg'] },
        { title: 'artist:hxxg', images: ['jpg_1/hxxg.jpg', 'jpg_2/hxxg.jpg', 'jpg_3/hxxg.jpg'] },
        { title: 'artist:myung yi', images: ['jpg_1/myung yi.jpg', 'jpg_2/myung yi.jpg', 'jpg_3/myung yi.jpg'] },
        { title: 'artist:cheri zao', images: ['jpg_1/cheri zao.jpg', 'jpg_2/cheri zao.jpg', 'jpg_3/cheri zao.jpg'] },
        { title: 'artist:kaoming', images: ['jpg_1/kaoming.jpg', 'jpg_2/kaoming.jpg', 'jpg_3/kaoming.jpg'] },
        { title: 'artist:soleil (soleilmtfbwy03)', images: ['jpg_1/soleil (soleilmtfbwy03).jpg', 'jpg_2/soleil (soleilmtfbwy03).jpg', 'jpg_3/soleil (soleilmtfbwy03).jpg'] },
        { title: 'artist:kojima (blue stardust)', images: ['jpg_1/kojima (blue stardust).jpg', 'jpg_2/kojima (blue stardust).jpg', 'jpg_3/kojima (blue stardust).jpg'] },
        { title: 'artist:nekobell', images: ['jpg_1/nekobell.jpg', 'jpg_2/nekobell.jpg', 'jpg_3/nekobell.jpg'] },
        { title: 'artist:mochi (m0chi0000)', images: ['jpg_1/mochi (m0chi0000).jpg', 'jpg_2/mochi (m0chi0000).jpg', 'jpg_3/mochi (m0chi0000).jpg'] },
        { title: 'artist:potion (moudamepo)', images: ['jpg_1/potion (moudamepo).jpg', 'jpg_2/potion (moudamepo).jpg', 'jpg_3/potion (moudamepo).jpg'] },
        { title: 'artist:cad (caddo)', images: ['jpg_1/cad (caddo).jpg', 'jpg_2/cad (caddo).jpg', 'jpg_3/cad (caddo).jpg'] },
        { title: 'artist:yoneyama mai', images: ['jpg_1/yoneyama mai.jpg', 'jpg_2/yoneyama mai.jpg', 'jpg_3/yoneyama mai.jpg'] },
        { title: 'artist:asakuraf', images: ['jpg_1/asakuraf.jpg', 'jpg_2/asakuraf.jpg', 'jpg_3/asakuraf.jpg'] },
        { title: 'artist:melon22', images: ['jpg_1/melon22.jpg', 'jpg_2/melon22.jpg', 'jpg_3/melon22.jpg'] },
        { title: 'artist:amania orz', images: ['jpg_1/amania orz.jpg', 'jpg_2/amania orz.jpg', 'jpg_3/amania orz.jpg'] },
        { title: 'artist:reddizen', images: ['jpg_1/reddizen.jpg', 'jpg_2/reddizen.jpg', 'jpg_3/reddizen.jpg'] },
        { title: 'artist:ilya kuvshinov', images: ['jpg_1/ilya kuvshinov.jpg', 'jpg_2/ilya kuvshinov.jpg', 'jpg_3/ilya kuvshinov.jpg'] },
        { title: 'artist:mamuru', images: ['jpg_1/mamuru.jpg', 'jpg_2/mamuru.jpg', 'jpg_3/mamuru.jpg'] },
        { title: 'artist:ibara dance', images: ['jpg_1/ibara dance.jpg', 'jpg_2/ibara dance.jpg', 'jpg_3/ibara dance.jpg'] },
        { title: 'artist:niur', images: ['jpg_1/niur.jpg', 'jpg_2/niur.jpg', 'jpg_3/niur.jpg'] },
        { title: 'artist:5t (5t 000)', images: ['jpg_1/5t (5t 000).jpg', 'jpg_2/5t (5t 000).jpg', 'jpg_3/5t (5t 000).jpg'] },
        { title: 'artist:kitsune-neko', images: ['jpg_1/kitsune-neko.jpg', 'jpg_2/kitsune-neko.jpg', 'jpg_3/kitsune-neko.jpg'] },
        { title: 'artist:maruko tooto', images: ['jpg_1/maruko tooto.jpg', 'jpg_2/maruko tooto.jpg', 'jpg_3/maruko tooto.jpg'] },
        { title: 'artist:icecake', images: ['jpg_1/icecake.jpg', 'jpg_2/icecake.jpg', 'jpg_3/icecake.jpg'] },
        { title: 'artist:rei (sanbonzakura)', images: ['jpg_1/rei (sanbonzakura).jpg', 'jpg_2/rei (sanbonzakura).jpg', 'jpg_3/rei (sanbonzakura).jpg'] },
        { title: 'artist:torino aqua', images: ['jpg_1/torino aqua.jpg', 'jpg_2/torino aqua.jpg', 'jpg_3/torino aqua.jpg'] },
        { title: 'artist:shimhaq', images: ['jpg_1/shimhaq.jpg', 'jpg_2/shimhaq.jpg', 'jpg_3/shimhaq.jpg'] },
        { title: 'artist:suzumi (ccroquette)', images: ['jpg_1/suzumi (ccroquette).jpg', 'jpg_2/suzumi (ccroquette).jpg', 'jpg_3/suzumi (ccroquette).jpg'] },
        { title: 'artist:dino (dinoartforame)', images: ['jpg_1/dino (dinoartforame).jpg', 'jpg_2/dino (dinoartforame).jpg', 'jpg_3/dino (dinoartforame).jpg'] },
        { title: 'artist:fkey', images: ['jpg_1/fkey.jpg', 'jpg_2/fkey.jpg', 'jpg_3/fkey.jpg'] },
        { title: 'artist:enma (enmanuelart)', images: ['jpg_1/enma (enmanuelart).jpg', 'jpg_2/enma (enmanuelart).jpg', 'jpg_3/enma (enmanuelart).jpg'] },
        { title: 'artist:omone hokoma agm', images: ['jpg_1/omone hokoma agm.jpg', 'jpg_2/omone hokoma agm.jpg', 'jpg_3/omone hokoma agm.jpg'] },
        { title: 'artist:kyano (kyanora3141)', images: ['jpg_1/kyano (kyanora3141).jpg', 'jpg_2/kyano (kyanora3141).jpg', 'jpg_3/kyano (kyanora3141).jpg'] },
        { title: 'artist:aelion draws', images: ['jpg_1/aelion draws.jpg', 'jpg_2/aelion draws.jpg', 'jpg_3/aelion draws.jpg'] },
        { title: 'artist:hu dako', images: ['jpg_1/hu dako.jpg', 'jpg_2/hu dako.jpg', 'jpg_3/hu dako.jpg'] },
        { title: 'artist:defaultz', images: ['jpg_1/defaultz.jpg', 'jpg_2/defaultz.jpg', 'jpg_3/defaultz.jpg'] },
        { title: 'artist:ratatatat74', images: ['jpg_1/ratatatat74.jpg', 'jpg_2/ratatatat74.jpg', 'jpg_3/ratatatat74.jpg'] },
        { title: 'artist:wjs07', images: ['jpg_1/wjs07.jpg', 'jpg_2/wjs07.jpg', 'jpg_3/wjs07.jpg'] },
        { title: 'artist:drums (artist)', images: ['jpg_1/drums (artist).jpg', 'jpg_2/drums (artist).jpg', 'jpg_3/drums (artist).jpg'] },
        { title: 'artist:fellatrix', images: ['jpg_1/fellatrix.jpg', 'jpg_2/fellatrix.jpg', 'jpg_3/fellatrix.jpg'] },
        { title: 'artist:pottsness', images: ['jpg_1/pottsness.jpg', 'jpg_2/pottsness.jpg', 'jpg_3/pottsness.jpg'] },
        { title: 'artist:john kafka', images: ['jpg_1/john kafka.jpg', 'jpg_2/john kafka.jpg', 'jpg_3/john kafka.jpg'] },
        { title: 'artist:rhine (overtonerhine)', images: ['jpg_1/rhine (overtonerhine).jpg', 'jpg_2/rhine (overtonerhine).jpg', 'jpg_3/rhine (overtonerhine).jpg'] },
        { title: 'artist:yuki flourish', images: ['jpg_1/yuki flourish.jpg', 'jpg_2/yuki flourish.jpg', 'jpg_3/yuki flourish.jpg'] },
        { title: 'artist:miwano rag', images: ['jpg_1/miwano rag.jpg', 'jpg_2/miwano rag.jpg', 'jpg_3/miwano rag.jpg'] },
        { title: 'artist:laserflip', images: ['jpg_1/laserflip.jpg', 'jpg_2/laserflip.jpg', 'jpg_3/laserflip.jpg'] },
        { title: 'artist:himonoata', images: ['jpg_1/himonoata.jpg', 'jpg_2/himonoata.jpg', 'jpg_3/himonoata.jpg'] },
        { title: 'artist:rhasta', images: ['jpg_1/rhasta.jpg', 'jpg_2/rhasta.jpg', 'jpg_3/rhasta.jpg'] },
        { title: 'artist:izumi tsubasu', images: ['jpg_1/izumi tsubasu.jpg', 'jpg_2/izumi tsubasu.jpg', 'jpg_3/izumi tsubasu.jpg'] },
        { title: 'artist:rkzrok', images: ['jpg_1/rkzrok.jpg', 'jpg_2/rkzrok.jpg', 'jpg_3/rkzrok.jpg'] },
        { title: 'artist:noriko (ni noriko)', images: ['jpg_1/noriko (ni noriko).jpg', 'jpg_2/noriko (ni noriko).jpg', 'jpg_3/noriko (ni noriko).jpg'] },
        { title: 'artist:pija (pianiishimo)', images: ['jpg_1/pija (pianiishimo).jpg', 'jpg_2/pija (pianiishimo).jpg', 'jpg_3/pija (pianiishimo).jpg'] },
        { title: 'artist:kase daiki', images: ['jpg_1/kase daiki.jpg', 'jpg_2/kase daiki.jpg', 'jpg_3/kase daiki.jpg'] },
        { title: 'artist:usashiro mani', images: ['jpg_1/usashiro mani.jpg', 'jpg_2/usashiro mani.jpg', 'jpg_3/usashiro mani.jpg'] },
        { title: 'artist:tandohark', images: ['jpg_1/tandohark.jpg', 'jpg_2/tandohark.jpg', 'jpg_3/tandohark.jpg'] },
        { title: 'artist:momozu komamochi', images: ['jpg_1/momozu komamochi.jpg', 'jpg_2/momozu komamochi.jpg', 'jpg_3/momozu komamochi.jpg'] },
        { title: 'artist:shiratama (shiratamaco)', images: ['jpg_1/shiratama (shiratamaco).jpg', 'jpg_2/shiratama (shiratamaco).jpg', 'jpg_3/shiratama (shiratamaco).jpg'] },
        { title: 'artist:rolua', images: ['jpg_1/rolua.jpg', 'jpg_2/rolua.jpg', 'jpg_3/rolua.jpg'] },
        { title: 'artist:alchemaniac', images: ['jpg_1/alchemaniac.jpg', 'jpg_2/alchemaniac.jpg', 'jpg_3/alchemaniac.jpg'] },
        { title: 'artist:vahn yourdoom', images: ['jpg_1/vahn yourdoom.jpg', 'jpg_2/vahn yourdoom.jpg', 'jpg_3/vahn yourdoom.jpg'] },
        { title: 'artist:militia minpei', images: ['jpg_1/militia minpei.jpg', 'jpg_2/militia minpei.jpg', 'jpg_3/militia minpei.jpg'] },
        { title: 'artist:ibenz009', images: ['jpg_1/ibenz009.jpg', 'jpg_2/ibenz009.jpg', 'jpg_3/ibenz009.jpg'] },
        { title: 'artist:saaal653', images: ['jpg_1/saaal653.jpg', 'jpg_2/saaal653.jpg', 'jpg_3/saaal653.jpg'] },
        { title: 'artist:rindou (radical dream)', images: ['jpg_1/rindou (radical dream).jpg', 'jpg_2/rindou (radical dream).jpg', 'jpg_3/rindou (radical dream).jpg'] },
        { title: 'artist:iro ame (amewaagada)', images: ['jpg_1/iro ame (amewaagada).jpg', 'jpg_2/iro ame (amewaagada).jpg', 'jpg_3/iro ame (amewaagada).jpg'] },
        { title: 'artist:hacco mayu', images: ['jpg_1/hacco mayu.jpg', 'jpg_2/hacco mayu.jpg', 'jpg_3/hacco mayu.jpg'] },
        { title: 'artist:black bean', images: ['jpg_1/black bean.jpg', 'jpg_2/black bean.jpg', 'jpg_3/black bean.jpg'] },
        { title: 'artist:kakure eria', images: ['jpg_1/kakure eria.jpg', 'jpg_2/kakure eria.jpg', 'jpg_3/kakure eria.jpg'] },
        { title: 'artist:jornyhail', images: ['jpg_1/jornyhail.jpg', 'jpg_2/jornyhail.jpg', 'jpg_3/jornyhail.jpg'] },
        { title: 'artist:osiimi', images: ['jpg_1/osiimi.jpg', 'jpg_2/osiimi.jpg', 'jpg_3/osiimi.jpg'] },
        { title: 'artist:ebonyxh', images: ['jpg_1/ebonyxh.jpg', 'jpg_2/ebonyxh.jpg', 'jpg_3/ebonyxh.jpg'] },
        { title: 'artist:alber', images: ['jpg_1/alber.jpg', 'jpg_2/alber.jpg', 'jpg_3/alber.jpg'] },
        { title: 'artist:uekura eku', images: ['jpg_1/uekura eku.jpg', 'jpg_2/uekura eku.jpg', 'jpg_3/uekura eku.jpg'] },
        { title: 'artist:aster crowley', images: ['jpg_1/aster crowley.jpg', 'jpg_2/aster crowley.jpg', 'jpg_3/aster crowley.jpg'] },
        { title: 'artist:murata range', images: ['jpg_1/murata range.jpg', 'jpg_2/murata range.jpg', 'jpg_3/murata range.jpg'] },
        { title: 'artist:thomasz', images: ['jpg_1/thomasz.jpg', 'jpg_2/thomasz.jpg', 'jpg_3/thomasz.jpg'] },
        { title: 'artist:feral lemma', images: ['jpg_1/feral lemma.jpg', 'jpg_2/feral lemma.jpg', 'jpg_3/feral lemma.jpg'] },
        { title: 'artist:chahan (fried rice0614)', images: ['jpg_1/chahan (fried rice0614).jpg', 'jpg_2/chahan (fried rice0614).jpg', 'jpg_3/chahan (fried rice0614).jpg'] },
        { title: 'artist:qtonagi', images: ['jpg_1/qtonagi.jpg', 'jpg_2/qtonagi.jpg', 'jpg_3/qtonagi.jpg'] },
        { title: 'artist:dk.senie', images: ['jpg_1/dk.senie.jpg', 'jpg_2/dk.senie.jpg', 'jpg_3/dk.senie.jpg'] },
        { title: 'artist:free style (yohan1754)', images: ['jpg_1/free style (yohan1754).jpg', 'jpg_2/free style (yohan1754).jpg', 'jpg_3/free style (yohan1754).jpg'] },
        { title: 'artist:nephlite', images: ['jpg_1/nephlite.jpg', 'jpg_2/nephlite.jpg', 'jpg_3/nephlite.jpg'] },
        { title: 'artist:jeneral', images: ['jpg_1/jeneral.jpg', 'jpg_2/jeneral.jpg', 'jpg_3/jeneral.jpg'] },
        { title: 'artist:blood hood', images: ['jpg_1/blood hood.jpg', 'jpg_2/blood hood.jpg', 'jpg_3/blood hood.jpg'] },
        { title: 'artist:nuu (nu-nyu)', images: ['jpg_1/nuu (nu-nyu).jpg', 'jpg_2/nuu (nu-nyu).jpg', 'jpg_3/nuu (nu-nyu).jpg'] },
        { title: 'artist:aki99', images: ['jpg_1/aki99.jpg', 'jpg_2/aki99.jpg', 'jpg_3/aki99.jpg'] },
        { title: 'artist:lm7 (op-center)', images: ['jpg_1/lm7 (op-center).jpg', 'jpg_2/lm7 (op-center).jpg', 'jpg_3/lm7 (op-center).jpg'] },
        { title: 'artist:shiratama (hockey)', images: ['jpg_1/shiratama (hockey).jpg', 'jpg_2/shiratama (hockey).jpg', 'jpg_3/shiratama (hockey).jpg'] },
        { title: 'artist:hakkasame', images: ['jpg_1/hakkasame.jpg', 'jpg_2/hakkasame.jpg', 'jpg_3/hakkasame.jpg'] },
        { title: 'artist:nekoguchi', images: ['jpg_1/nekoguchi.jpg', 'jpg_2/nekoguchi.jpg', 'jpg_3/nekoguchi.jpg'] },
        { title: 'artist:curss', images: ['jpg_1/curss.jpg', 'jpg_2/curss.jpg', 'jpg_3/curss.jpg'] },
        { title: 'artist:rourou (been)', images: ['jpg_1/rourou (been).jpg', 'jpg_2/rourou (been).jpg', 'jpg_3/rourou (been).jpg'] },
        { title: 'artist:sirfy', images: ['jpg_1/sirfy.jpg', 'jpg_2/sirfy.jpg', 'jpg_3/sirfy.jpg'] },
        { title: 'artist:muroku (aimichiyo0526)', images: ['jpg_1/muroku (aimichiyo0526).jpg', 'jpg_2/muroku (aimichiyo0526).jpg', 'jpg_3/muroku (aimichiyo0526).jpg'] },
        { title: 'artist:wangchuan de quanyan', images: ['jpg_1/wangchuan de quanyan.jpg', 'jpg_2/wangchuan de quanyan.jpg', 'jpg_3/wangchuan de quanyan.jpg'] },
        { title: 'artist:mika pikazo', images: ['jpg_1/mika pikazo.jpg', 'jpg_2/mika pikazo.jpg', 'jpg_3/mika pikazo.jpg'] },
        { title: 'artist:stu dts', images: ['jpg_1/stu dts.jpg', 'jpg_2/stu dts.jpg', 'jpg_3/stu dts.jpg'] },
        { title: 'artist:milkychu', images: ['jpg_1/milkychu.jpg', 'jpg_2/milkychu.jpg', 'jpg_3/milkychu.jpg'] },
        { title: 'artist:atahuta', images: ['jpg_1/atahuta.jpg', 'jpg_2/atahuta.jpg', 'jpg_3/atahuta.jpg'] },
        { title: 'artist:guweiz', images: ['jpg_1/guweiz.jpg', 'jpg_2/guweiz.jpg', 'jpg_3/guweiz.jpg'] },
        { title: 'artist:poharo', images: ['jpg_1/poharo.jpg', 'jpg_2/poharo.jpg', 'jpg_3/poharo.jpg'] },
        { title: 'artist:ohigetan', images: ['jpg_1/ohigetan.jpg', 'jpg_2/ohigetan.jpg', 'jpg_3/ohigetan.jpg'] },
        { title: 'artist:goldowl', images: ['jpg_1/goldowl.jpg', 'jpg_2/goldowl.jpg', 'jpg_3/goldowl.jpg'] },
        { title: 'artist:jonpei', images: ['jpg_1/jonpei.jpg', 'jpg_2/jonpei.jpg', 'jpg_3/jonpei.jpg'] },
        { title: 'artist:tsuji santa', images: ['jpg_1/tsuji santa.jpg', 'jpg_2/tsuji santa.jpg', 'jpg_3/tsuji santa.jpg'] },
        { title: 'artist:yuming li', images: ['jpg_1/yuming li.jpg', 'jpg_2/yuming li.jpg', 'jpg_3/yuming li.jpg'] },
        { title: 'artist:futon (kitsune tsuki)', images: ['jpg_1/futon (kitsune tsuki).jpg', 'jpg_2/futon (kitsune tsuki).jpg', 'jpg_3/futon (kitsune tsuki).jpg'] },
        { title: 'artist:sade abyss', images: ['jpg_1/sade abyss.jpg', 'jpg_2/sade abyss.jpg', 'jpg_3/sade abyss.jpg'] },
        { title: 'artist:monikano', images: ['jpg_1/monikano.jpg', 'jpg_2/monikano.jpg', 'jpg_3/monikano.jpg'] },
        { title: 'artist:ebiblue', images: ['jpg_1/ebiblue.jpg', 'jpg_2/ebiblue.jpg', 'jpg_3/ebiblue.jpg'] },
        { title: 'artist:kyo (kuroichigo)', images: ['jpg_1/kyo (kuroichigo).jpg', 'jpg_2/kyo (kuroichigo).jpg', 'jpg_3/kyo (kuroichigo).jpg'] },
        { title: 'artist:blushyspicy', images: ['jpg_1/blushyspicy.jpg', 'jpg_2/blushyspicy.jpg', 'jpg_3/blushyspicy.jpg'] },
        { title: 'artist:mihifu', images: ['jpg_1/mihifu.jpg', 'jpg_2/mihifu.jpg', 'jpg_3/mihifu.jpg'] },
        { title: 'artist:projecttiger', images: ['jpg_1/projecttiger.jpg', 'jpg_2/projecttiger.jpg', 'jpg_3/projecttiger.jpg'] },
        { title: 'artist:par0llel', images: ['jpg_1/par0llel.jpg', 'jpg_2/par0llel.jpg', 'jpg_3/par0llel.jpg'] },
        { title: 'artist:eeyoosekedooaat', images: ['jpg_1/eeyoosekedooaat.jpg', 'jpg_2/eeyoosekedooaat.jpg', 'jpg_3/eeyoosekedooaat.jpg'] },
        { title: 'artist:elleciel.eud', images: ['jpg_1/elleciel.eud.jpg', 'jpg_2/elleciel.eud.jpg', 'jpg_3/elleciel.eud.jpg'] },
        { title: 'artist:patch oxxo', images: ['jpg_1/patch oxxo.jpg', 'jpg_2/patch oxxo.jpg', 'jpg_3/patch oxxo.jpg'] },
        { title: 'artist:kyuuba melo', images: ['jpg_1/kyuuba melo.jpg', 'jpg_2/kyuuba melo.jpg', 'jpg_3/kyuuba melo.jpg'] },
        { title: 'artist:speedl00ver', images: ['jpg_1/speedl00ver.jpg', 'jpg_2/speedl00ver.jpg', 'jpg_3/speedl00ver.jpg'] },
        { title: 'artist:rapa rachi', images: ['jpg_1/rapa rachi.jpg', 'jpg_2/rapa rachi.jpg', 'jpg_3/rapa rachi.jpg'] },
        { title: 'artist:omoti (1201208)', images: ['jpg_1/omoti (1201208).jpg', 'jpg_2/omoti (1201208).jpg', 'jpg_3/omoti (1201208).jpg'] },
        { title: 'artist:kiramarukou', images: ['jpg_1/kiramarukou.jpg', 'jpg_2/kiramarukou.jpg', 'jpg_3/kiramarukou.jpg'] },
        { title: 'artist:liang xing', images: ['jpg_1/liang xing.jpg', 'jpg_2/liang xing.jpg', 'jpg_3/liang xing.jpg'] },
        { title: 'artist:neocoill', images: ['jpg_1/neocoill.jpg', 'jpg_2/neocoill.jpg', 'jpg_3/neocoill.jpg'] },
        { title: 'artist:tamaki (tamaki599)', images: ['jpg_1/tamaki (tamaki599).jpg', 'jpg_2/tamaki (tamaki599).jpg', 'jpg_3/tamaki (tamaki599).jpg'] },
        { title: 'artist:hungry clicker', images: ['jpg_1/hungry clicker.jpg', 'jpg_2/hungry clicker.jpg', 'jpg_3/hungry clicker.jpg'] },
        { title: 'artist:incase', images: ['jpg_1/incase.jpg', 'jpg_2/incase.jpg', 'jpg_3/incase.jpg'] },
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