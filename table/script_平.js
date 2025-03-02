

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
    
    const totalRows = 596; // 总行数（示例数据，实际应动态获取）


    const tableBody = document.getElementById('table-body');
    const goPageButton = document.getElementById('go-to-page');
    const firstPageButton = document.getElementById('first-page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    // 示例数据（实际应动态获取或从服务器加载）
    const data = [

        { title: '无画风原图', images: ['og/1.png', 'og/2.png', 'og/3.png'] },
        { title: 'artist:obui', images: ['jpg_1/obui.jpg', 'jpg_2/obui.jpg', 'jpg_3/obui.jpg'] },
        { title: 'artist:chomikuplus', images: ['jpg_1/chomikuplus.jpg', 'jpg_2/chomikuplus.jpg', 'jpg_3/chomikuplus.jpg'] },
        { title: 'artist:himeyamato', images: ['jpg_1/himeyamato.jpg', 'jpg_2/himeyamato.jpg', 'jpg_3/himeyamato.jpg'] },
        { title: 'artist:oza osuwari', images: ['jpg_1/oza osuwari.jpg', 'jpg_2/oza osuwari.jpg', 'jpg_3/oza osuwari.jpg'] },
        { title: 'artist:inaeda kei', images: ['jpg_1/inaeda kei.jpg', 'jpg_2/inaeda kei.jpg', 'jpg_3/inaeda kei.jpg'] },
        { title: 'artist:agawa ryou', images: ['jpg_1/agawa ryou.jpg', 'jpg_2/agawa ryou.jpg', 'jpg_3/agawa ryou.jpg'] },
        { title: 'artist:big shine', images: ['jpg_1/big shine.jpg', 'jpg_2/big shine.jpg', 'jpg_3/big shine.jpg'] },
        { title: 'artist:mitomumitomu', images: ['jpg_1/mitomumitomu.jpg', 'jpg_2/mitomumitomu.jpg', 'jpg_3/mitomumitomu.jpg'] },
        { title: 'artist:thirty 8ght', images: ['jpg_1/thirty 8ght.jpg', 'jpg_2/thirty 8ght.jpg', 'jpg_3/thirty 8ght.jpg'] },
        { title: 'artist:shexyo', images: ['jpg_1/shexyo.jpg', 'jpg_2/shexyo.jpg', 'jpg_3/shexyo.jpg'] },
        { title: 'artist:poper (arin sel)', images: ['jpg_1/poper (arin sel).jpg', 'jpg_2/poper (arin sel).jpg', 'jpg_3/poper (arin sel).jpg'] },
        { title: 'artist:kunaboto', images: ['jpg_1/kunaboto.jpg', 'jpg_2/kunaboto.jpg', 'jpg_3/kunaboto.jpg'] },
        { title: 'artist:38 (sanjuuhachi)', images: ['jpg_1/38 (sanjuuhachi).jpg', 'jpg_2/38 (sanjuuhachi).jpg', 'jpg_3/38 (sanjuuhachi).jpg'] },
        { title: 'artist:khyle.', images: ['jpg_1/khyle..jpg', 'jpg_2/khyle..jpg', 'jpg_3/khyle..jpg'] },
        { title: 'artist:tianliang duohe fangdongye', images: ['jpg_1/tianliang duohe fangdongye.jpg', 'jpg_2/tianliang duohe fangdongye.jpg', 'jpg_3/tianliang duohe fangdongye.jpg'] },
        { title: 'artist:kajimakoto', images: ['jpg_1/kajimakoto.jpg', 'jpg_2/kajimakoto.jpg', 'jpg_3/kajimakoto.jpg'] },
        { title: 'artist:akino komichi', images: ['jpg_1/akino komichi.jpg', 'jpg_2/akino komichi.jpg', 'jpg_3/akino komichi.jpg'] },
        { title: 'artist:choujiroo', images: ['jpg_1/choujiroo.jpg', 'jpg_2/choujiroo.jpg', 'jpg_3/choujiroo.jpg'] },
        { title: 'artist:ten no hoshi', images: ['jpg_1/ten no hoshi.jpg', 'jpg_2/ten no hoshi.jpg', 'jpg_3/ten no hoshi.jpg'] },
        { title: 'artist:elocca', images: ['jpg_1/elocca.jpg', 'jpg_2/elocca.jpg', 'jpg_3/elocca.jpg'] },
        { title: 'artist:pingpangpongpang', images: ['jpg_1/pingpangpongpang.jpg', 'jpg_2/pingpangpongpang.jpg', 'jpg_3/pingpangpongpang.jpg'] },
        { title: 'artist:reagan long', images: ['jpg_1/reagan long.jpg', 'jpg_2/reagan long.jpg', 'jpg_3/reagan long.jpg'] },
        { title: 'artist:murakami suigun', images: ['jpg_1/murakami suigun.jpg', 'jpg_2/murakami suigun.jpg', 'jpg_3/murakami suigun.jpg'] },
        { title: 'artist:tomawarinosuizou', images: ['jpg_1/tomawarinosuizou.jpg', 'jpg_2/tomawarinosuizou.jpg', 'jpg_3/tomawarinosuizou.jpg'] },
        { title: 'artist:hero neisan', images: ['jpg_1/hero neisan.jpg', 'jpg_2/hero neisan.jpg', 'jpg_3/hero neisan.jpg'] },
        { title: 'artist:tlandolt69', images: ['jpg_1/tlandolt69.jpg', 'jpg_2/tlandolt69.jpg', 'jpg_3/tlandolt69.jpg'] },
        { title: 'artist:suzuki toto', images: ['jpg_1/suzuki toto.jpg', 'jpg_2/suzuki toto.jpg', 'jpg_3/suzuki toto.jpg'] },
        { title: 'artist:eip (pepai)', images: ['jpg_1/eip (pepai).jpg', 'jpg_2/eip (pepai).jpg', 'jpg_3/eip (pepai).jpg'] },
        { title: 'artist:mizumizuni', images: ['jpg_1/mizumizuni.jpg', 'jpg_2/mizumizuni.jpg', 'jpg_3/mizumizuni.jpg'] },
        { title: 'artist:hanjuku choco-pai', images: ['jpg_1/hanjuku choco-pai.jpg', 'jpg_2/hanjuku choco-pai.jpg', 'jpg_3/hanjuku choco-pai.jpg'] },
        { title: 'artist:siu (siu0207)', images: ['jpg_1/siu (siu0207).jpg', 'jpg_2/siu (siu0207).jpg', 'jpg_3/siu (siu0207).jpg'] },
        { title: 'artist:ai gon deroga', images: ['jpg_1/ai gon deroga.jpg', 'jpg_2/ai gon deroga.jpg', 'jpg_3/ai gon deroga.jpg'] },
        { title: 'artist:try (lsc)', images: ['jpg_1/try (lsc).jpg', 'jpg_2/try (lsc).jpg', 'jpg_3/try (lsc).jpg'] },
        { title: 'artist:andou shuki', images: ['jpg_1/andou shuki.jpg', 'jpg_2/andou shuki.jpg', 'jpg_3/andou shuki.jpg'] },
        { title: 'artist:ashina merou', images: ['jpg_1/ashina merou.jpg', 'jpg_2/ashina merou.jpg', 'jpg_3/ashina merou.jpg'] },
        { title: 'artist:hews', images: ['jpg_1/hews.jpg', 'jpg_2/hews.jpg', 'jpg_3/hews.jpg'] },
        { title: 'artist:senri gan', images: ['jpg_1/senri gan.jpg', 'jpg_2/senri gan.jpg', 'jpg_3/senri gan.jpg'] },
        { title: 'artist:doyoon 7', images: ['jpg_1/doyoon 7.jpg', 'jpg_2/doyoon 7.jpg', 'jpg_3/doyoon 7.jpg'] },
        { title: 'artist:teddy (khanshin)', images: ['jpg_1/teddy (khanshin).jpg', 'jpg_2/teddy (khanshin).jpg', 'jpg_3/teddy (khanshin).jpg'] },
        { title: 'artist:punc p', images: ['jpg_1/punc p.jpg', 'jpg_2/punc p.jpg', 'jpg_3/punc p.jpg'] },
        { title: 'artist:saberiii', images: ['jpg_1/saberiii.jpg', 'jpg_2/saberiii.jpg', 'jpg_3/saberiii.jpg'] },
        { title: 'artist:tonki', images: ['jpg_1/tonki.jpg', 'jpg_2/tonki.jpg', 'jpg_3/tonki.jpg'] },
        { title: 'artist:classic (zildjian33)', images: ['jpg_1/classic (zildjian33).jpg', 'jpg_2/classic (zildjian33).jpg', 'jpg_3/classic (zildjian33).jpg'] },
        { title: 'artist:b-ginga', images: ['jpg_1/b-ginga.jpg', 'jpg_2/b-ginga.jpg', 'jpg_3/b-ginga.jpg'] },
        { title: 'artist:penti', images: ['jpg_1/penti.jpg', 'jpg_2/penti.jpg', 'jpg_3/penti.jpg'] },
        { title: 'artist:aji (sakanaaj1)', images: ['jpg_1/aji (sakanaaj1).jpg', 'jpg_2/aji (sakanaaj1).jpg', 'jpg_3/aji (sakanaaj1).jpg'] },
        { title: 'artist:kirinkirin', images: ['jpg_1/kirinkirin.jpg', 'jpg_2/kirinkirin.jpg', 'jpg_3/kirinkirin.jpg'] },
        { title: 'artist:9x2no18', images: ['jpg_1/9x2no18.jpg', 'jpg_2/9x2no18.jpg', 'jpg_3/9x2no18.jpg'] },
        { title: 'artist:satou kuuki', images: ['jpg_1/satou kuuki.jpg', 'jpg_2/satou kuuki.jpg', 'jpg_3/satou kuuki.jpg'] },
        { title: 'artist:TrNyteal', images: ['jpg_1/TrNyteal.jpg', 'jpg_2/TrNyteal.jpg', 'jpg_3/TrNyteal.jpg'] },
        { title: 'artist:chowbie', images: ['jpg_1/chowbie.jpg', 'jpg_2/chowbie.jpg', 'jpg_3/chowbie.jpg'] },
        { title: 'artist:sasakura (calicchio)', images: ['jpg_1/sasakura (calicchio).jpg', 'jpg_2/sasakura (calicchio).jpg', 'jpg_3/sasakura (calicchio).jpg'] },
        { title: 'artist:kcccc', images: ['jpg_1/kcccc.jpg', 'jpg_2/kcccc.jpg', 'jpg_3/kcccc.jpg'] },
        { title: 'artist:bilibili xiaolu', images: ['jpg_1/bilibili xiaolu.jpg', 'jpg_2/bilibili xiaolu.jpg', 'jpg_3/bilibili xiaolu.jpg'] },
        { title: 'artist:okuri banto', images: ['jpg_1/okuri banto.jpg', 'jpg_2/okuri banto.jpg', 'jpg_3/okuri banto.jpg'] },
        { title: 'artist:yewang19', images: ['jpg_1/yewang19.jpg', 'jpg_2/yewang19.jpg', 'jpg_3/yewang19.jpg'] },
        { title: 'artist:houtengeki', images: ['jpg_1/houtengeki.jpg', 'jpg_2/houtengeki.jpg', 'jpg_3/houtengeki.jpg'] },
        { title: 'artist:miyashiro ryuutarou', images: ['jpg_1/miyashiro ryuutarou.jpg', 'jpg_2/miyashiro ryuutarou.jpg', 'jpg_3/miyashiro ryuutarou.jpg'] },
        { title: 'artist:torisan', images: ['jpg_1/torisan.jpg', 'jpg_2/torisan.jpg', 'jpg_3/torisan.jpg'] },
        { title: 'artist:kutan', images: ['jpg_1/kutan.jpg', 'jpg_2/kutan.jpg', 'jpg_3/kutan.jpg'] },
        { title: 'artist:bada (jksh5056)', images: ['jpg_1/bada (jksh5056).jpg', 'jpg_2/bada (jksh5056).jpg', 'jpg_3/bada (jksh5056).jpg'] },
        { title: 'artist:c.honey', images: ['jpg_1/c.honey.jpg', 'jpg_2/c.honey.jpg', 'jpg_3/c.honey.jpg'] },
        { title: 'artist:dishwasher1910', images: ['jpg_1/dishwasher1910.jpg', 'jpg_2/dishwasher1910.jpg', 'jpg_3/dishwasher1910.jpg'] },
        { title: 'artist:sage joh', images: ['jpg_1/sage joh.jpg', 'jpg_2/sage joh.jpg', 'jpg_3/sage joh.jpg'] },
        { title: 'artist:da mao banlangen', images: ['jpg_1/da mao banlangen.jpg', 'jpg_2/da mao banlangen.jpg', 'jpg_3/da mao banlangen.jpg'] },
        { title: 'artist:ogata tei', images: ['jpg_1/ogata tei.jpg', 'jpg_2/ogata tei.jpg', 'jpg_3/ogata tei.jpg'] },
        { title: 'artist:itete', images: ['jpg_1/itete.jpg', 'jpg_2/itete.jpg', 'jpg_3/itete.jpg'] },
        { title: 'artist:ichika (ichi ka0)', images: ['jpg_1/ichika (ichi ka0).jpg', 'jpg_2/ichika (ichi ka0).jpg', 'jpg_3/ichika (ichi ka0).jpg'] },
        { title: 'artist:expulse', images: ['jpg_1/expulse.jpg', 'jpg_2/expulse.jpg', 'jpg_3/expulse.jpg'] },
        { title: 'artist:sunga2usagi', images: ['jpg_1/sunga2usagi.jpg', 'jpg_2/sunga2usagi.jpg', 'jpg_3/sunga2usagi.jpg'] },
        { title: 'artist:spicy moo', images: ['jpg_1/spicy moo.jpg', 'jpg_2/spicy moo.jpg', 'jpg_3/spicy moo.jpg'] },
        { title: 'artist:wagashi928', images: ['jpg_1/wagashi928.jpg', 'jpg_2/wagashi928.jpg', 'jpg_3/wagashi928.jpg'] },
        { title: 'artist:damda', images: ['jpg_1/damda.jpg', 'jpg_2/damda.jpg', 'jpg_3/damda.jpg'] },
        { title: 'artist:m-da s-tarou', images: ['jpg_1/m-da s-tarou.jpg', 'jpg_2/m-da s-tarou.jpg', 'jpg_3/m-da s-tarou.jpg'] },
        { title: 'artist:renge (730)', images: ['jpg_1/renge (730).jpg', 'jpg_2/renge (730).jpg', 'jpg_3/renge (730).jpg'] },
        { title: 'artist:luku', images: ['jpg_1/luku.jpg', 'jpg_2/luku.jpg', 'jpg_3/luku.jpg'] },
        { title: 'artist:huwari (dnwls3010)', images: ['jpg_1/huwari (dnwls3010).jpg', 'jpg_2/huwari (dnwls3010).jpg', 'jpg_3/huwari (dnwls3010).jpg'] },
        { title: 'artist:ogipote', images: ['jpg_1/ogipote.jpg', 'jpg_2/ogipote.jpg', 'jpg_3/ogipote.jpg'] },
        { title: 'artist:sutorora', images: ['jpg_1/sutorora.jpg', 'jpg_2/sutorora.jpg', 'jpg_3/sutorora.jpg'] },
        { title: 'artist:rella', images: ['jpg_1/rella.jpg', 'jpg_2/rella.jpg', 'jpg_3/rella.jpg'] },
        { title: 'artist:wanle', images: ['jpg_1/wanle.jpg', 'jpg_2/wanle.jpg', 'jpg_3/wanle.jpg'] },
        { title: 'artist:fuzichoco', images: ['jpg_1/fuzichoco.jpg', 'jpg_2/fuzichoco.jpg', 'jpg_3/fuzichoco.jpg'] },
        { title: 'artist:tsukioka tsukiho', images: ['jpg_1/tsukioka tsukiho.jpg', 'jpg_2/tsukioka tsukiho.jpg', 'jpg_3/tsukioka tsukiho.jpg'] },
        { title: 'artist:monety', images: ['jpg_1/monety.jpg', 'jpg_2/monety.jpg', 'jpg_3/monety.jpg'] },
        { title: 'artist:cola (gotouryouta)', images: ['jpg_1/cola (gotouryouta).jpg', 'jpg_2/cola (gotouryouta).jpg', 'jpg_3/cola (gotouryouta).jpg'] },
        { title: 'artist:gemi', images: ['jpg_1/gemi.jpg', 'jpg_2/gemi.jpg', 'jpg_3/gemi.jpg'] },
        { title: 'artist:theobrobine', images: ['jpg_1/theobrobine.jpg', 'jpg_2/theobrobine.jpg', 'jpg_3/theobrobine.jpg'] },
        { title: 'artist:kantoku', images: ['jpg_1/kantoku.jpg', 'jpg_2/kantoku.jpg', 'jpg_3/kantoku.jpg'] },
        { title: 'artist:yumejidake', images: ['jpg_1/yumejidake.jpg', 'jpg_2/yumejidake.jpg', 'jpg_3/yumejidake.jpg'] },
        { title: 'artist:gozaru', images: ['jpg_1/gozaru.jpg', 'jpg_2/gozaru.jpg', 'jpg_3/gozaru.jpg'] },
        { title: 'artist:greem bang', images: ['jpg_1/greem bang.jpg', 'jpg_2/greem bang.jpg', 'jpg_3/greem bang.jpg'] },
        { title: 'artist:sayori (oskn)', images: ['jpg_1/sayori (oskn).jpg', 'jpg_2/sayori (oskn).jpg', 'jpg_3/sayori (oskn).jpg'] },
        { title: 'artist:housou-kun', images: ['jpg_1/housou-kun.jpg', 'jpg_2/housou-kun.jpg', 'jpg_3/housou-kun.jpg'] },
        { title: 'artist:secon', images: ['jpg_1/secon.jpg', 'jpg_2/secon.jpg', 'jpg_3/secon.jpg'] },
        { title: 'artist:biya (1024)', images: ['jpg_1/biya (1024).jpg', 'jpg_2/biya (1024).jpg', 'jpg_3/biya (1024).jpg'] },
        { title: 'artist:asanagi', images: ['jpg_1/asanagi.jpg', 'jpg_2/asanagi.jpg', 'jpg_3/asanagi.jpg'] },
        { title: 'artist:satou daiji', images: ['jpg_1/satou daiji.jpg', 'jpg_2/satou daiji.jpg', 'jpg_3/satou daiji.jpg'] },
        { title: 'artist:fei (maidoll)', images: ['jpg_1/fei (maidoll).jpg', 'jpg_2/fei (maidoll).jpg', 'jpg_3/fei (maidoll).jpg'] },
        { title: 'artist:endou okito', images: ['jpg_1/endou okito.jpg', 'jpg_2/endou okito.jpg', 'jpg_3/endou okito.jpg'] },
        { title: 'artist:jonsun', images: ['jpg_1/jonsun.jpg', 'jpg_2/jonsun.jpg', 'jpg_3/jonsun.jpg'] },
        { title: 'artist:sakiyamama', images: ['jpg_1/sakiyamama.jpg', 'jpg_2/sakiyamama.jpg', 'jpg_3/sakiyamama.jpg'] },
        { title: 'artist:tamanoi peromekuri', images: ['jpg_1/tamanoi peromekuri.jpg', 'jpg_2/tamanoi peromekuri.jpg', 'jpg_3/tamanoi peromekuri.jpg'] },
        { title: 'artist:kedama milk', images: ['jpg_1/kedama milk.jpg', 'jpg_2/kedama milk.jpg', 'jpg_3/kedama milk.jpg'] },
        { title: 'artist:mana (remana)', images: ['jpg_1/mana (remana).jpg', 'jpg_2/mana (remana).jpg', 'jpg_3/mana (remana).jpg'] },
        { title: 'artist:puririn', images: ['jpg_1/puririn.jpg', 'jpg_2/puririn.jpg', 'jpg_3/puririn.jpg'] },
        { title: 'artist:syhan', images: ['jpg_1/syhan.jpg', 'jpg_2/syhan.jpg', 'jpg_3/syhan.jpg'] },
        { title: 'artist:henreader', images: ['jpg_1/henreader.jpg', 'jpg_2/henreader.jpg', 'jpg_3/henreader.jpg'] },
        { title: 'artist:sugoihi', images: ['jpg_1/sugoihi.jpg', 'jpg_2/sugoihi.jpg', 'jpg_3/sugoihi.jpg'] },
        { title: 'artist:wagashi (dagashiya)', images: ['jpg_1/wagashi (dagashiya).jpg', 'jpg_2/wagashi (dagashiya).jpg', 'jpg_3/wagashi (dagashiya).jpg'] },
        { title: 'artist:shuffle (songdatiankong)', images: ['jpg_1/shuffle (songdatiankong).jpg', 'jpg_2/shuffle (songdatiankong).jpg', 'jpg_3/shuffle (songdatiankong).jpg'] },
        { title: 'artist:shufflebox', images: ['jpg_1/shufflebox.jpg', 'jpg_2/shufflebox.jpg', 'jpg_3/shufflebox.jpg'] },
        { title: 'artist:torishu (kumataka 4867)', images: ['jpg_1/torishu (kumataka 4867).jpg', 'jpg_2/torishu (kumataka 4867).jpg', 'jpg_3/torishu (kumataka 4867).jpg'] },
        { title: 'artist:paint musume', images: ['jpg_1/paint musume.jpg', 'jpg_2/paint musume.jpg', 'jpg_3/paint musume.jpg'] },
        { title: 'artist:youta', images: ['jpg_1/youta.jpg', 'jpg_2/youta.jpg', 'jpg_3/youta.jpg'] },
        { title: 'artist:sayori', images: ['jpg_1/sayori.jpg', 'jpg_2/sayori.jpg', 'jpg_3/sayori.jpg'] },
        { title: 'artist:mikokomiyazawa', images: ['jpg_1/mikokomiyazawa.jpg', 'jpg_2/mikokomiyazawa.jpg', 'jpg_3/mikokomiyazawa.jpg'] },
        { title: 'artist:yuki (asayuki101)', images: ['jpg_1/yuki (asayuki101).jpg', 'jpg_2/yuki (asayuki101).jpg', 'jpg_3/yuki (asayuki101).jpg'] },
        { title: 'artist:karappo (poket12)', images: ['jpg_1/karappo (poket12).jpg', 'jpg_2/karappo (poket12).jpg', 'jpg_3/karappo (poket12).jpg'] },
        { title: 'artist:yd (orange maru)', images: ['jpg_1/yd (orange maru).jpg', 'jpg_2/yd (orange maru).jpg', 'jpg_3/yd (orange maru).jpg'] },
        { title: 'artist:jp06', images: ['jpg_1/jp06.jpg', 'jpg_2/jp06.jpg', 'jpg_3/jp06.jpg'] },
        { title: 'artist:cccco', images: ['jpg_1/cccco.jpg', 'jpg_2/cccco.jpg', 'jpg_3/cccco.jpg'] },
        { title: 'artist:ildy', images: ['jpg_1/ildy.jpg', 'jpg_2/ildy.jpg', 'jpg_3/ildy.jpg'] },
        { title: 'artist:may.l', images: ['jpg_1/may.l.jpg', 'jpg_2/may.l.jpg', 'jpg_3/may.l.jpg'] },
        { title: 'artist:beijuu', images: ['jpg_1/beijuu.jpg', 'jpg_2/beijuu.jpg', 'jpg_3/beijuu.jpg'] },
        { title: 'artist:echj', images: ['jpg_1/echj.jpg', 'jpg_2/echj.jpg', 'jpg_3/echj.jpg'] },
        { title: 'artist:mell (dmwe3537)', images: ['jpg_1/mell (dmwe3537).jpg', 'jpg_2/mell (dmwe3537).jpg', 'jpg_3/mell (dmwe3537).jpg'] },
        { title: 'artist:mamimi (mamamimi)', images: ['jpg_1/mamimi (mamamimi).jpg', 'jpg_2/mamimi (mamamimi).jpg', 'jpg_3/mamimi (mamamimi).jpg'] },
        { title: 'artist:sawaya (mizukazu)', images: ['jpg_1/sawaya (mizukazu).jpg', 'jpg_2/sawaya (mizukazu).jpg', 'jpg_3/sawaya (mizukazu).jpg'] },
        { title: 'artist:edmun6969', images: ['jpg_1/edmun6969.jpg', 'jpg_2/edmun6969.jpg', 'jpg_3/edmun6969.jpg'] },
        { title: 'artist:jasony', images: ['jpg_1/jasony.jpg', 'jpg_2/jasony.jpg', 'jpg_3/jasony.jpg'] },
        { title: 'artist:amai-pai', images: ['jpg_1/amai-pai.jpg', 'jpg_2/amai-pai.jpg', 'jpg_3/amai-pai.jpg'] },
        { title: 'artist:areola slip', images: ['jpg_1/areola slip.jpg', 'jpg_2/areola slip.jpg', 'jpg_3/areola slip.jpg'] },
        { title: 'artist:leonmandala', images: ['jpg_1/leonmandala.jpg', 'jpg_2/leonmandala.jpg', 'jpg_3/leonmandala.jpg'] },
        { title: 'artist:bow (bhp)', images: ['jpg_1/bow (bhp).jpg', 'jpg_2/bow (bhp).jpg', 'jpg_3/bow (bhp).jpg'] },
        { title: 'artist:otokucha', images: ['jpg_1/otokucha.jpg', 'jpg_2/otokucha.jpg', 'jpg_3/otokucha.jpg'] },
        { title: 'artist:kirome (kamipaper)', images: ['jpg_1/kirome (kamipaper).jpg', 'jpg_2/kirome (kamipaper).jpg', 'jpg_3/kirome (kamipaper).jpg'] },
        { title: 'artist:jack dempa', images: ['jpg_1/jack dempa.jpg', 'jpg_2/jack dempa.jpg', 'jpg_3/jack dempa.jpg'] },
        { title: 'artist:stone (ksorede)', images: ['jpg_1/stone (ksorede).jpg', 'jpg_2/stone (ksorede).jpg', 'jpg_3/stone (ksorede).jpg'] },
        { title: 'artist:k pring', images: ['jpg_1/k pring.jpg', 'jpg_2/k pring.jpg', 'jpg_3/k pring.jpg'] },
        { title: 'artist:nikuatsu magician shinbo', images: ['jpg_1/nikuatsu magician shinbo.jpg', 'jpg_2/nikuatsu magician shinbo.jpg', 'jpg_3/nikuatsu magician shinbo.jpg'] },
        { title: 'artist:onono imoko', images: ['jpg_1/onono imoko.jpg', 'jpg_2/onono imoko.jpg', 'jpg_3/onono imoko.jpg'] },
        { title: 'artist:brll', images: ['jpg_1/brll.jpg', 'jpg_2/brll.jpg', 'jpg_3/brll.jpg'] },
        { title: 'artist:mimonel', images: ['jpg_1/mimonel.jpg', 'jpg_2/mimonel.jpg', 'jpg_3/mimonel.jpg'] },
        { title: 'artist:ogre (illustogre)', images: ['jpg_1/ogre (illustogre).jpg', 'jpg_2/ogre (illustogre).jpg', 'jpg_3/ogre (illustogre).jpg'] },
        { title: 'artist:yusha m', images: ['jpg_1/yusha m.jpg', 'jpg_2/yusha m.jpg', 'jpg_3/yusha m.jpg'] },
        { title: 'artist:arind yudha', images: ['jpg_1/arind yudha.jpg', 'jpg_2/arind yudha.jpg', 'jpg_3/arind yudha.jpg'] },
        { title: 'artist:jingb dx', images: ['jpg_1/jingb dx.jpg', 'jpg_2/jingb dx.jpg', 'jpg_3/jingb dx.jpg'] },
        { title: 'artist:samart', images: ['jpg_1/samart.jpg', 'jpg_2/samart.jpg', 'jpg_3/samart.jpg'] },
        { title: 'artist:mario (mario portal)', images: ['jpg_1/mario (mario portal).jpg', 'jpg_2/mario (mario portal).jpg', 'jpg_3/mario (mario portal).jpg'] },
        { title: 'artist:nike (nike1060)', images: ['jpg_1/nike (nike1060).jpg', 'jpg_2/nike (nike1060).jpg', 'jpg_3/nike (nike1060).jpg'] },
        { title: 'artist:lichiko', images: ['jpg_1/lichiko.jpg', 'jpg_2/lichiko.jpg', 'jpg_3/lichiko.jpg'] },
        { title: 'artist:rottenpizza', images: ['jpg_1/rottenpizza.jpg', 'jpg_2/rottenpizza.jpg', 'jpg_3/rottenpizza.jpg'] },
        { title: 'artist:rororogi mogera', images: ['jpg_1/rororogi mogera.jpg', 'jpg_2/rororogi mogera.jpg', 'jpg_3/rororogi mogera.jpg'] },
        { title: 'artist:yzr (yzr99)', images: ['jpg_1/yzr (yzr99).jpg', 'jpg_2/yzr (yzr99).jpg', 'jpg_3/yzr (yzr99).jpg'] },
        { title: 'artist:yabacha', images: ['jpg_1/yabacha.jpg', 'jpg_2/yabacha.jpg', 'jpg_3/yabacha.jpg'] },
        { title: 'artist:masaki nanaya', images: ['jpg_1/masaki nanaya.jpg', 'jpg_2/masaki nanaya.jpg', 'jpg_3/masaki nanaya.jpg'] },
        { title: 'artist:zombie mogura', images: ['jpg_1/zombie mogura.jpg', 'jpg_2/zombie mogura.jpg', 'jpg_3/zombie mogura.jpg'] },
        { title: 'artist:walzrj', images: ['jpg_1/walzrj.jpg', 'jpg_2/walzrj.jpg', 'jpg_3/walzrj.jpg'] },
        { title: 'artist:blade (galaxist)', images: ['jpg_1/blade (galaxist).jpg', 'jpg_2/blade (galaxist).jpg', 'jpg_3/blade (galaxist).jpg'] },
        { title: 'artist:tony taka', images: ['jpg_1/tony taka.jpg', 'jpg_2/tony taka.jpg', 'jpg_3/tony taka.jpg'] },
        { title: 'artist:matsunaga kouyou', images: ['jpg_1/matsunaga kouyou.jpg', 'jpg_2/matsunaga kouyou.jpg', 'jpg_3/matsunaga kouyou.jpg'] },
        { title: 'artist:a1 (initial-g)', images: ['jpg_1/a1 (initial-g).jpg', 'jpg_2/a1 (initial-g).jpg', 'jpg_3/a1 (initial-g).jpg'] },
        { title: 'artist:hara (harayutaka)', images: ['jpg_1/hara (harayutaka).jpg', 'jpg_2/hara (harayutaka).jpg', 'jpg_3/hara (harayutaka).jpg'] },
        { title: 'artist:dd (ijigendd)', images: ['jpg_1/dd (ijigendd).jpg', 'jpg_2/dd (ijigendd).jpg', 'jpg_3/dd (ijigendd).jpg'] },
        { title: 'artist:kani biimu', images: ['jpg_1/kani biimu.jpg', 'jpg_2/kani biimu.jpg', 'jpg_3/kani biimu.jpg'] },
        { title: 'artist:minaba hideo', images: ['jpg_1/minaba hideo.jpg', 'jpg_2/minaba hideo.jpg', 'jpg_3/minaba hideo.jpg'] },
        { title: 'artist:abubu', images: ['jpg_1/abubu.jpg', 'jpg_2/abubu.jpg', 'jpg_3/abubu.jpg'] },
        { title: 'artist:boris (noborhys)', images: ['jpg_1/boris (noborhys).jpg', 'jpg_2/boris (noborhys).jpg', 'jpg_3/boris (noborhys).jpg'] },
        { title: 'artist:slugbox', images: ['jpg_1/slugbox.jpg', 'jpg_2/slugbox.jpg', 'jpg_3/slugbox.jpg'] },
        { title: 'artist:tsukishiro saika', images: ['jpg_1/tsukishiro saika.jpg', 'jpg_2/tsukishiro saika.jpg', 'jpg_3/tsukishiro saika.jpg'] },
        { title: 'artist:kouno (masao)', images: ['jpg_1/kouno (masao).jpg', 'jpg_2/kouno (masao).jpg', 'jpg_3/kouno (masao).jpg'] },
        { title: 'artist:nyantcha', images: ['jpg_1/nyantcha.jpg', 'jpg_2/nyantcha.jpg', 'jpg_3/nyantcha.jpg'] },
        { title: 'artist:tsuda nanafushi', images: ['jpg_1/tsuda nanafushi.jpg', 'jpg_2/tsuda nanafushi.jpg', 'jpg_3/tsuda nanafushi.jpg'] },
        { title: 'artist:wa (genryusui)', images: ['jpg_1/wa (genryusui).jpg', 'jpg_2/wa (genryusui).jpg', 'jpg_3/wa (genryusui).jpg'] },
        { title: 'artist:gawako', images: ['jpg_1/gawako.jpg', 'jpg_2/gawako.jpg', 'jpg_3/gawako.jpg'] },
        { title: 'artist:tako seijin', images: ['jpg_1/tako seijin.jpg', 'jpg_2/tako seijin.jpg', 'jpg_3/tako seijin.jpg'] },
        { title: 'artist:toosaka asagi', images: ['jpg_1/toosaka asagi.jpg', 'jpg_2/toosaka asagi.jpg', 'jpg_3/toosaka asagi.jpg'] },
        { title: 'artist:enkyo yuuichirou', images: ['jpg_1/enkyo yuuichirou.jpg', 'jpg_2/enkyo yuuichirou.jpg', 'jpg_3/enkyo yuuichirou.jpg'] },
        { title: 'artist:yuuji (and)', images: ['jpg_1/yuuji (and).jpg', 'jpg_2/yuuji (and).jpg', 'jpg_3/yuuji (and).jpg'] },
        { title: 'artist:mizuki makoto', images: ['jpg_1/mizuki makoto.jpg', 'jpg_2/mizuki makoto.jpg', 'jpg_3/mizuki makoto.jpg'] },
        { title: 'artist:tomose shunsaku', images: ['jpg_1/tomose shunsaku.jpg', 'jpg_2/tomose shunsaku.jpg', 'jpg_3/tomose shunsaku.jpg'] },
        { title: 'artist:zen (kamuro)', images: ['jpg_1/zen (kamuro).jpg', 'jpg_2/zen (kamuro).jpg', 'jpg_3/zen (kamuro).jpg'] },
        { title: 'artist:horosuke', images: ['jpg_1/horosuke.jpg', 'jpg_2/horosuke.jpg', 'jpg_3/horosuke.jpg'] },
        { title: 'artist:fumihiko (fu mihi ko)', images: ['jpg_1/fumihiko (fu mihi ko).jpg', 'jpg_2/fumihiko (fu mihi ko).jpg', 'jpg_3/fumihiko (fu mihi ko).jpg'] },
        { title: 'artist:fujima takuya', images: ['jpg_1/fujima takuya.jpg', 'jpg_2/fujima takuya.jpg', 'jpg_3/fujima takuya.jpg'] },
        { title: 'artist:merunyaa', images: ['jpg_1/merunyaa.jpg', 'jpg_2/merunyaa.jpg', 'jpg_3/merunyaa.jpg'] },
        { title: 'artist:chanta (ayatakaoisii)', images: ['jpg_1/chanta (ayatakaoisii).jpg', 'jpg_2/chanta (ayatakaoisii).jpg', 'jpg_3/chanta (ayatakaoisii).jpg'] },
        { title: 'artist:tukiwani', images: ['jpg_1/tukiwani.jpg', 'jpg_2/tukiwani.jpg', 'jpg_3/tukiwani.jpg'] },
        { title: 'artist:cle masahiro', images: ['jpg_1/cle masahiro.jpg', 'jpg_2/cle masahiro.jpg', 'jpg_3/cle masahiro.jpg'] },
        { title: 'artist:kaamin (mariarose753)', images: ['jpg_1/kaamin (mariarose753).jpg', 'jpg_2/kaamin (mariarose753).jpg', 'jpg_3/kaamin (mariarose753).jpg'] },
        { title: 'artist:k-suwabe', images: ['jpg_1/k-suwabe.jpg', 'jpg_2/k-suwabe.jpg', 'jpg_3/k-suwabe.jpg'] },
        { title: 'artist:phantom ix row', images: ['jpg_1/phantom ix row.jpg', 'jpg_2/phantom ix row.jpg', 'jpg_3/phantom ix row.jpg'] },
        { title: 'artist:nikorashi-ka', images: ['jpg_1/nikorashi-ka.jpg', 'jpg_2/nikorashi-ka.jpg', 'jpg_3/nikorashi-ka.jpg'] },
        { title: 'artist:kuromiya', images: ['jpg_1/kuromiya.jpg', 'jpg_2/kuromiya.jpg', 'jpg_3/kuromiya.jpg'] },
        { title: 'artist:satou kibi', images: ['jpg_1/satou kibi.jpg', 'jpg_2/satou kibi.jpg', 'jpg_3/satou kibi.jpg'] },
        { title: 'artist:suerte', images: ['jpg_1/suerte.jpg', 'jpg_2/suerte.jpg', 'jpg_3/suerte.jpg'] },
        { title: 'artist:ekrea jan', images: ['jpg_1/ekrea jan.jpg', 'jpg_2/ekrea jan.jpg', 'jpg_3/ekrea jan.jpg'] },
        { title: 'artist:han-0v0', images: ['jpg_1/han-0v0.jpg', 'jpg_2/han-0v0.jpg', 'jpg_3/han-0v0.jpg'] },
        { title: 'artist:hanny (uirusu chan)', images: ['jpg_1/hanny (uirusu chan).jpg', 'jpg_2/hanny (uirusu chan).jpg', 'jpg_3/hanny (uirusu chan).jpg'] },
        { title: 'artist:kelvin hiu', images: ['jpg_1/kelvin hiu.jpg', 'jpg_2/kelvin hiu.jpg', 'jpg_3/kelvin hiu.jpg'] },
        { title: 'artist:liyom', images: ['jpg_1/liyom.jpg', 'jpg_2/liyom.jpg', 'jpg_3/liyom.jpg'] },
        { title: 'artist:hidulume', images: ['jpg_1/hidulume.jpg', 'jpg_2/hidulume.jpg', 'jpg_3/hidulume.jpg'] },
        { title: 'artist:seya (sseya33)', images: ['jpg_1/seya (sseya33).jpg', 'jpg_2/seya (sseya33).jpg', 'jpg_3/seya (sseya33).jpg'] },
        { title: 'artist:kuri choko', images: ['jpg_1/kuri choko.jpg', 'jpg_2/kuri choko.jpg', 'jpg_3/kuri choko.jpg'] },
        { title: 'artist:ohland', images: ['jpg_1/ohland.jpg', 'jpg_2/ohland.jpg', 'jpg_3/ohland.jpg'] },
        { title: 'artist:kshimu', images: ['jpg_1/kshimu.jpg', 'jpg_2/kshimu.jpg', 'jpg_3/kshimu.jpg'] },
        { title: 'artist:nira (vira)', images: ['jpg_1/nira (vira).jpg', 'jpg_2/nira (vira).jpg', 'jpg_3/nira (vira).jpg'] },
        { title: 'artist:200f (nifu)', images: ['jpg_1/200f (nifu).jpg', 'jpg_2/200f (nifu).jpg', 'jpg_3/200f (nifu).jpg'] },
        { title: 'artist:makihitsuji', images: ['jpg_1/makihitsuji.jpg', 'jpg_2/makihitsuji.jpg', 'jpg_3/makihitsuji.jpg'] },
        { title: 'artist:netural', images: ['jpg_1/netural.jpg', 'jpg_2/netural.jpg', 'jpg_3/netural.jpg'] },
        { title: 'artist:mendou kusai', images: ['jpg_1/mendou kusai.jpg', 'jpg_2/mendou kusai.jpg', 'jpg_3/mendou kusai.jpg'] },
        { title: 'artist:misaka 12003-gou', images: ['jpg_1/misaka 12003-gou.jpg', 'jpg_2/misaka 12003-gou.jpg', 'jpg_3/misaka 12003-gou.jpg'] },
        { title: 'artist:fajyobore', images: ['jpg_1/fajyobore.jpg', 'jpg_2/fajyobore.jpg', 'jpg_3/fajyobore.jpg'] },
        { title: 'artist:modare', images: ['jpg_1/modare.jpg', 'jpg_2/modare.jpg', 'jpg_3/modare.jpg'] },
        { title: 'artist:hxxg', images: ['jpg_1/hxxg.jpg', 'jpg_2/hxxg.jpg', 'jpg_3/hxxg.jpg'] },
        { title: 'artist:konya karasue', images: ['jpg_1/konya karasue.jpg', 'jpg_2/konya karasue.jpg', 'jpg_3/konya karasue.jpg'] },
        { title: 'artist:myung yi', images: ['jpg_1/myung yi.jpg', 'jpg_2/myung yi.jpg', 'jpg_3/myung yi.jpg'] },
        { title: 'artist:airseal', images: ['jpg_1/airseal.jpg', 'jpg_2/airseal.jpg', 'jpg_3/airseal.jpg'] },
        { title: 'artist:stellar blade', images: ['jpg_1/stellar blade.jpg', 'jpg_2/stellar blade.jpg', 'jpg_3/stellar blade.jpg'] },
        { title: 'artist:mizuryu kei', images: ['jpg_1/mizuryu kei.jpg', 'jpg_2/mizuryu kei.jpg', 'jpg_3/mizuryu kei.jpg'] },
        { title: 'artist:ru zhai', images: ['jpg_1/ru zhai.jpg', 'jpg_2/ru zhai.jpg', 'jpg_3/ru zhai.jpg'] },
        { title: 'artist:swkl:d', images: ['jpg_1/swkld.jpg', 'jpg_2/swkld.jpg', 'jpg_3/swkld.jpg'] },
        { title: 'artist:cheri zao', images: ['jpg_1/cheri zao.jpg', 'jpg_2/cheri zao.jpg', 'jpg_3/cheri zao.jpg'] },
        { title: 'artist:kaoming', images: ['jpg_1/kaoming.jpg', 'jpg_2/kaoming.jpg', 'jpg_3/kaoming.jpg'] },
        { title: 'artist:menthako', images: ['jpg_1/menthako.jpg', 'jpg_2/menthako.jpg', 'jpg_3/menthako.jpg'] },
        { title: 'artist:hwansang', images: ['jpg_1/hwansang.jpg', 'jpg_2/hwansang.jpg', 'jpg_3/hwansang.jpg'] },
        { title: 'artist:9ml', images: ['jpg_1/9ml.jpg', 'jpg_2/9ml.jpg', 'jpg_3/9ml.jpg'] },
        { title: 'artist:onedoo', images: ['jpg_1/onedoo.jpg', 'jpg_2/onedoo.jpg', 'jpg_3/onedoo.jpg'] },
        { title: 'artist:kojima (blue stardust)', images: ['jpg_1/kojima (blue stardust).jpg', 'jpg_2/kojima (blue stardust).jpg', 'jpg_3/kojima (blue stardust).jpg'] },
        { title: 'artist:nekobell', images: ['jpg_1/nekobell.jpg', 'jpg_2/nekobell.jpg', 'jpg_3/nekobell.jpg'] },
        { title: 'artist:anita hika', images: ['jpg_1/anita hika.jpg', 'jpg_2/anita hika.jpg', 'jpg_3/anita hika.jpg'] },
        { title: 'artist:Yellowpaint.', images: ['jpg_1/Yellowpaint..jpg', 'jpg_2/Yellowpaint..jpg', 'jpg_3/Yellowpaint..jpg'] },
        { title: 'artist:piyo (pixiv 2308057)', images: ['jpg_1/piyo (pixiv 2308057).jpg', 'jpg_2/piyo (pixiv 2308057).jpg', 'jpg_3/piyo (pixiv 2308057).jpg'] },
        { title: 'artist:omegu', images: ['jpg_1/omegu.jpg', 'jpg_2/omegu.jpg', 'jpg_3/omegu.jpg'] },
        { title: 'artist:mochi (m0chi0000)', images: ['jpg_1/mochi (m0chi0000).jpg', 'jpg_2/mochi (m0chi0000).jpg', 'jpg_3/mochi (m0chi0000).jpg'] },
        { title: 'artist:mi taro333', images: ['jpg_1/mi taro333.jpg', 'jpg_2/mi taro333.jpg', 'jpg_3/mi taro333.jpg'] },
        { title: 'artist:kji (rozo)', images: ['jpg_1/kji (rozo).jpg', 'jpg_2/kji (rozo).jpg', 'jpg_3/kji (rozo).jpg'] },
        { title: 'artist:metsu end', images: ['jpg_1/metsu end.jpg', 'jpg_2/metsu end.jpg', 'jpg_3/metsu end.jpg'] },
        { title: 'artist:bikkii', images: ['jpg_1/bikkii.jpg', 'jpg_2/bikkii.jpg', 'jpg_3/bikkii.jpg'] },
        { title: 'artist:ranf', images: ['jpg_1/ranf.jpg', 'jpg_2/ranf.jpg', 'jpg_3/ranf.jpg'] },
        { title: 'artist:momisan', images: ['jpg_1/momisan.jpg', 'jpg_2/momisan.jpg', 'jpg_3/momisan.jpg'] },
        { title: 'artist:misekiss', images: ['jpg_1/misekiss.jpg', 'jpg_2/misekiss.jpg', 'jpg_3/misekiss.jpg'] },
        { title: 'artist:hong (white spider)', images: ['jpg_1/hong (white spider).jpg', 'jpg_2/hong (white spider).jpg', 'jpg_3/hong (white spider).jpg'] },
        { title: 'artist:subob (subobdesu)', images: ['jpg_1/subob (subobdesu).jpg', 'jpg_2/subob (subobdesu).jpg', 'jpg_3/subob (subobdesu).jpg'] },
        { title: 'artist:choyeon', images: ['jpg_1/choyeon.jpg', 'jpg_2/choyeon.jpg', 'jpg_3/choyeon.jpg'] },
        { title: 'artist:jeon-eo konoshiro', images: ['jpg_1/jeon-eo konoshiro.jpg', 'jpg_2/jeon-eo konoshiro.jpg', 'jpg_3/jeon-eo konoshiro.jpg'] },
        { title: 'artist:zanya 000', images: ['jpg_1/zanya 000.jpg', 'jpg_2/zanya 000.jpg', 'jpg_3/zanya 000.jpg'] },
        { title: 'artist:yayoi maka', images: ['jpg_1/yayoi maka.jpg', 'jpg_2/yayoi maka.jpg', 'jpg_3/yayoi maka.jpg'] },
        { title: 'artist:hot vr', images: ['jpg_1/hot vr.jpg', 'jpg_2/hot vr.jpg', 'jpg_3/hot vr.jpg'] },
        { title: 'artist:unacchi (nyusankin)', images: ['jpg_1/unacchi (nyusankin).jpg', 'jpg_2/unacchi (nyusankin).jpg', 'jpg_3/unacchi (nyusankin).jpg'] },
        { title: 'artist:cad (caddo)', images: ['jpg_1/cad (caddo).jpg', 'jpg_2/cad (caddo).jpg', 'jpg_3/cad (caddo).jpg'] },
        { title: 'artist:ciloranko', images: ['jpg_1/ciloranko.jpg', 'jpg_2/ciloranko.jpg', 'jpg_3/ciloranko.jpg'] },
        { title: 'artist:sho (sho lwlw)', images: ['jpg_1/sho (sho lwlw).jpg', 'jpg_2/sho (sho lwlw).jpg', 'jpg_3/sho (sho lwlw).jpg'] },
        { title: 'artist:onineko', images: ['jpg_1/onineko.jpg', 'jpg_2/onineko.jpg', 'jpg_3/onineko.jpg'] },
        { title: 'artist:ke-ta', images: ['jpg_1/ke-ta.jpg', 'jpg_2/ke-ta.jpg', 'jpg_3/ke-ta.jpg'] },
        { title: 'artist:ask (askzy)', images: ['jpg_1/ask (askzy).jpg', 'jpg_2/ask (askzy).jpg', 'jpg_3/ask (askzy).jpg'] },
        { title: 'artist:yoneyama mai', images: ['jpg_1/yoneyama mai.jpg', 'jpg_2/yoneyama mai.jpg', 'jpg_3/yoneyama mai.jpg'] },
        { title: 'artist:momoko (momopoco)', images: ['jpg_1/momoko (momopoco).jpg', 'jpg_2/momoko (momopoco).jpg', 'jpg_3/momoko (momopoco).jpg'] },
        { title: 'artist:neco', images: ['jpg_1/neco.jpg', 'jpg_2/neco.jpg', 'jpg_3/neco.jpg'] },
        { title: 'artist:reddizen', images: ['jpg_1/reddizen.jpg', 'jpg_2/reddizen.jpg', 'jpg_3/reddizen.jpg'] },
        { title: 'artist:ilya kuvshinov', images: ['jpg_1/ilya kuvshinov.jpg', 'jpg_2/ilya kuvshinov.jpg', 'jpg_3/ilya kuvshinov.jpg'] },
        { title: 'artist:lam (ramdayo)', images: ['jpg_1/lam (ramdayo).jpg', 'jpg_2/lam (ramdayo).jpg', 'jpg_3/lam (ramdayo).jpg'] },
        { title: 'artist:mamuru', images: ['jpg_1/mamuru.jpg', 'jpg_2/mamuru.jpg', 'jpg_3/mamuru.jpg'] },
        { title: 'artist:silly (marinkomoe)', images: ['jpg_1/silly (marinkomoe).jpg', 'jpg_2/silly (marinkomoe).jpg', 'jpg_3/silly (marinkomoe).jpg'] },
        { title: 'artist:binggong asylum', images: ['jpg_1/binggong asylum.jpg', 'jpg_2/binggong asylum.jpg', 'jpg_3/binggong asylum.jpg'] },
        { title: 'artist:greenkohgen', images: ['jpg_1/greenkohgen.jpg', 'jpg_2/greenkohgen.jpg', 'jpg_3/greenkohgen.jpg'] },
        { title: 'artist:5t (5t 000)', images: ['jpg_1/5t (5t 000).jpg', 'jpg_2/5t (5t 000).jpg', 'jpg_3/5t (5t 000).jpg'] },
        { title: 'artist:shindol', images: ['jpg_1/shindol.jpg', 'jpg_2/shindol.jpg', 'jpg_3/shindol.jpg'] },
        { title: 'artist:chen bin', images: ['jpg_1/chen bin.jpg', 'jpg_2/chen bin.jpg', 'jpg_3/chen bin.jpg'] },
        { title: 'artist:hitotose rin', images: ['jpg_1/hitotose rin.jpg', 'jpg_2/hitotose rin.jpg', 'jpg_3/hitotose rin.jpg'] },
        { title: 'artist:kakumayu', images: ['jpg_1/kakumayu.jpg', 'jpg_2/kakumayu.jpg', 'jpg_3/kakumayu.jpg'] },
        { title: 'artist:ttosom', images: ['jpg_1/ttosom.jpg', 'jpg_2/ttosom.jpg', 'jpg_3/ttosom.jpg'] },
        { title: 'artist:stmast', images: ['jpg_1/stmast.jpg', 'jpg_2/stmast.jpg', 'jpg_3/stmast.jpg'] },
        { title: 'artist:kokukyukeo', images: ['jpg_1/kokukyukeo.jpg', 'jpg_2/kokukyukeo.jpg', 'jpg_3/kokukyukeo.jpg'] },
        { title: 'artist:harenchi', images: ['jpg_1/harenchi.jpg', 'jpg_2/harenchi.jpg', 'jpg_3/harenchi.jpg'] },
        { title: 'artist:kitsune-neko', images: ['jpg_1/kitsune-neko.jpg', 'jpg_2/kitsune-neko.jpg', 'jpg_3/kitsune-neko.jpg'] },
        { title: 'artist:maruko tooto', images: ['jpg_1/maruko tooto.jpg', 'jpg_2/maruko tooto.jpg', 'jpg_3/maruko tooto.jpg'] },
        { title: 'artist:ohisashiburi', images: ['jpg_1/ohisashiburi.jpg', 'jpg_2/ohisashiburi.jpg', 'jpg_3/ohisashiburi.jpg'] },
        { title: 'artist:icecake', images: ['jpg_1/icecake.jpg', 'jpg_2/icecake.jpg', 'jpg_3/icecake.jpg'] },
        { title: 'artist:rei (sanbonzakura)', images: ['jpg_1/rei (sanbonzakura).jpg', 'jpg_2/rei (sanbonzakura).jpg', 'jpg_3/rei (sanbonzakura).jpg'] },
        { title: 'artist:torino aqua', images: ['jpg_1/torino aqua.jpg', 'jpg_2/torino aqua.jpg', 'jpg_3/torino aqua.jpg'] },
        { title: 'artist:yuji (fantasia)', images: ['jpg_1/yuji (fantasia).jpg', 'jpg_2/yuji (fantasia).jpg', 'jpg_3/yuji (fantasia).jpg'] },
        { title: 'artist:dino (dinoartforame)', images: ['jpg_1/dino (dinoartforame).jpg', 'jpg_2/dino (dinoartforame).jpg', 'jpg_3/dino (dinoartforame).jpg'] },
        { title: 'artist:fkey', images: ['jpg_1/fkey.jpg', 'jpg_2/fkey.jpg', 'jpg_3/fkey.jpg'] },
        { title: 'artist:lalazyt', images: ['jpg_1/lalazyt.jpg', 'jpg_2/lalazyt.jpg', 'jpg_3/lalazyt.jpg'] },
        { title: 'artist:omone hokoma agm', images: ['jpg_1/omone hokoma agm.jpg', 'jpg_2/omone hokoma agm.jpg', 'jpg_3/omone hokoma agm.jpg'] },
        { title: 'artist:xerbatt', images: ['jpg_1/xerbatt.jpg', 'jpg_2/xerbatt.jpg', 'jpg_3/xerbatt.jpg'] },
        { title: 'artist:kyano (kyanora3141)', images: ['jpg_1/kyano (kyanora3141).jpg', 'jpg_2/kyano (kyanora3141).jpg', 'jpg_3/kyano (kyanora3141).jpg'] },
        { title: 'artist:isshiki (ffmania7)', images: ['jpg_1/isshiki (ffmania7).jpg', 'jpg_2/isshiki (ffmania7).jpg', 'jpg_3/isshiki (ffmania7).jpg'] },
        { title: 'artist:tsune (tune)', images: ['jpg_1/tsune (tune).jpg', 'jpg_2/tsune (tune).jpg', 'jpg_3/tsune (tune).jpg'] },
        { title: 'artist:gomashio ponz', images: ['jpg_1/gomashio ponz.jpg', 'jpg_2/gomashio ponz.jpg', 'jpg_3/gomashio ponz.jpg'] },
        { title: 'artist:sanuki (kyoudashya)', images: ['jpg_1/sanuki (kyoudashya).jpg', 'jpg_2/sanuki (kyoudashya).jpg', 'jpg_3/sanuki (kyoudashya).jpg'] },
        { title: 'artist:aelion draws', images: ['jpg_1/aelion draws.jpg', 'jpg_2/aelion draws.jpg', 'jpg_3/aelion draws.jpg'] },
        { title: 'artist:goback', images: ['jpg_1/goback.jpg', 'jpg_2/goback.jpg', 'jpg_3/goback.jpg'] },
        { title: 'artist:hu dako', images: ['jpg_1/hu dako.jpg', 'jpg_2/hu dako.jpg', 'jpg_3/hu dako.jpg'] },
        { title: 'artist:defaultz', images: ['jpg_1/defaultz.jpg', 'jpg_2/defaultz.jpg', 'jpg_3/defaultz.jpg'] },
        { title: 'artist:gins', images: ['jpg_1/gins.jpg', 'jpg_2/gins.jpg', 'jpg_3/gins.jpg'] },
        { title: 'artist:mentha', images: ['jpg_1/mentha.jpg', 'jpg_2/mentha.jpg', 'jpg_3/mentha.jpg'] },
        { title: 'artist:ratatatat74', images: ['jpg_1/ratatatat74.jpg', 'jpg_2/ratatatat74.jpg', 'jpg_3/ratatatat74.jpg'] },
        { title: 'artist:dearonnus', images: ['jpg_1/dearonnus.jpg', 'jpg_2/dearonnus.jpg', 'jpg_3/dearonnus.jpg'] },
        { title: 'artist:dawapat', images: ['jpg_1/dawapat.jpg', 'jpg_2/dawapat.jpg', 'jpg_3/dawapat.jpg'] },
        { title: 'artist:akaneman', images: ['jpg_1/akaneman.jpg', 'jpg_2/akaneman.jpg', 'jpg_3/akaneman.jpg'] },
        { title: 'artist:fellatrix', images: ['jpg_1/fellatrix.jpg', 'jpg_2/fellatrix.jpg', 'jpg_3/fellatrix.jpg'] },
        { title: 'artist:otintin', images: ['jpg_1/otintin.jpg', 'jpg_2/otintin.jpg', 'jpg_3/otintin.jpg'] },
        { title: 'artist:pyz (cath x tech)', images: ['jpg_1/pyz (cath x tech).jpg', 'jpg_2/pyz (cath x tech).jpg', 'jpg_3/pyz (cath x tech).jpg'] },
        { title: 'artist:gonster', images: ['jpg_1/gonster.jpg', 'jpg_2/gonster.jpg', 'jpg_3/gonster.jpg'] },
        { title: 'artist:kabu (niniko2ko)', images: ['jpg_1/kabu (niniko2ko).jpg', 'jpg_2/kabu (niniko2ko).jpg', 'jpg_3/kabu (niniko2ko).jpg'] },
        { title: 'artist:shiroshisu', images: ['jpg_1/shiroshisu.jpg', 'jpg_2/shiroshisu.jpg', 'jpg_3/shiroshisu.jpg'] },
        { title: 'artist:aamond', images: ['jpg_1/aamond.jpg', 'jpg_2/aamond.jpg', 'jpg_3/aamond.jpg'] },
        { title: 'artist:kangshi', images: ['jpg_1/kangshi.jpg', 'jpg_2/kangshi.jpg', 'jpg_3/kangshi.jpg'] },
        { title: 'artist:mignon', images: ['jpg_1/mignon.jpg', 'jpg_2/mignon.jpg', 'jpg_3/mignon.jpg'] },
        { title: 'artist:ribao', images: ['jpg_1/ribao.jpg', 'jpg_2/ribao.jpg', 'jpg_3/ribao.jpg'] },
        { title: 'artist:jima', images: ['jpg_1/jima.jpg', 'jpg_2/jima.jpg', 'jpg_3/jima.jpg'] },
        { title: 'artist:mika-pikazo', images: ['jpg_1/mika-pikazo.jpg', 'jpg_2/mika-pikazo.jpg', 'jpg_3/mika-pikazo.jpg'] },
        { title: 'artist:torino', images: ['jpg_1/torino.jpg', 'jpg_2/torino.jpg', 'jpg_3/torino.jpg'] },
        { title: 'artist:reoen', images: ['jpg_1/reoen.jpg', 'jpg_2/reoen.jpg', 'jpg_3/reoen.jpg'] },
        { title: 'artist:simao (x x36131422)', images: ['jpg_1/simao (x x36131422).jpg', 'jpg_2/simao (x x36131422).jpg', 'jpg_3/simao (x x36131422).jpg'] },
        { title: 'artist:dawalixi', images: ['jpg_1/dawalixi.jpg', 'jpg_2/dawalixi.jpg', 'jpg_3/dawalixi.jpg'] },
        { title: 'artist:less', images: ['jpg_1/less.jpg', 'jpg_2/less.jpg', 'jpg_3/less.jpg'] },
        { title: 'artist:spitroast', images: ['jpg_1/spitroast.jpg', 'jpg_2/spitroast.jpg', 'jpg_3/spitroast.jpg'] },
        { title: 'artist:pottsness', images: ['jpg_1/pottsness.jpg', 'jpg_2/pottsness.jpg', 'jpg_3/pottsness.jpg'] },
        { title: 'artist:onineko-chan', images: ['jpg_1/onineko-chan.jpg', 'jpg_2/onineko-chan.jpg', 'jpg_3/onineko-chan.jpg'] },
        { title: 'artist:xiujia yihuizi', images: ['jpg_1/xiujia yihuizi.jpg', 'jpg_2/xiujia yihuizi.jpg', 'jpg_3/xiujia yihuizi.jpg'] },
        { title: 'artist:kabedoru', images: ['jpg_1/kabedoru.jpg', 'jpg_2/kabedoru.jpg', 'jpg_3/kabedoru.jpg'] },
        { title: 'artist:ningen mame', images: ['jpg_1/ningen mame.jpg', 'jpg_2/ningen mame.jpg', 'jpg_3/ningen mame.jpg'] },
        { title: 'artist:muk monsieur', images: ['jpg_1/muk monsieur.jpg', 'jpg_2/muk monsieur.jpg', 'jpg_3/muk monsieur.jpg'] },
        { title: 'artist:starshadowmagician', images: ['jpg_1/starshadowmagician.jpg', 'jpg_2/starshadowmagician.jpg', 'jpg_3/starshadowmagician.jpg'] },
        { title: 'artist:john kafka', images: ['jpg_1/john kafka.jpg', 'jpg_2/john kafka.jpg', 'jpg_3/john kafka.jpg'] },
        { title: 'artist:kujou karasuma', images: ['jpg_1/kujou karasuma.jpg', 'jpg_2/kujou karasuma.jpg', 'jpg_3/kujou karasuma.jpg'] },
        { title: 'artist:fishine', images: ['jpg_1/fishine.jpg', 'jpg_2/fishine.jpg', 'jpg_3/fishine.jpg'] },
        { title: 'artist:umezawa itte', images: ['jpg_1/umezawa itte.jpg', 'jpg_2/umezawa itte.jpg', 'jpg_3/umezawa itte.jpg'] },
        { title: 'artist:azure (capriccio)', images: ['jpg_1/azure (capriccio).jpg', 'jpg_2/azure (capriccio).jpg', 'jpg_3/azure (capriccio).jpg'] },
        { title: 'artist:ugwa', images: ['jpg_1/ugwa.jpg', 'jpg_2/ugwa.jpg', 'jpg_3/ugwa.jpg'] },
        { title: 'artist:khoaphan96', images: ['jpg_1/khoaphan96.jpg', 'jpg_2/khoaphan96.jpg', 'jpg_3/khoaphan96.jpg'] },
        { title: 'artist:mooofoo', images: ['jpg_1/mooofoo.jpg', 'jpg_2/mooofoo.jpg', 'jpg_3/mooofoo.jpg'] },
        { title: 'artist:yamauchi (conan-comy)', images: ['jpg_1/yamauchi (conan-comy).jpg', 'jpg_2/yamauchi (conan-comy).jpg', 'jpg_3/yamauchi (conan-comy).jpg'] },
        { title: 'artist:tab head', images: ['jpg_1/tab head.jpg', 'jpg_2/tab head.jpg', 'jpg_3/tab head.jpg'] },
        { title: 'artist:lance (lancelliu)', images: ['jpg_1/lance (lancelliu).jpg', 'jpg_2/lance (lancelliu).jpg', 'jpg_3/lance (lancelliu).jpg'] },
        { title: 'artist:mebe (teadia violet)', images: ['jpg_1/mebe (teadia violet).jpg', 'jpg_2/mebe (teadia violet).jpg', 'jpg_3/mebe (teadia violet).jpg'] },
        { title: 'artist:touchika', images: ['jpg_1/touchika.jpg', 'jpg_2/touchika.jpg', 'jpg_3/touchika.jpg'] },
        { title: 'artist:yuki flourish', images: ['jpg_1/yuki flourish.jpg', 'jpg_2/yuki flourish.jpg', 'jpg_3/yuki flourish.jpg'] },
        { title: 'artist:myluche', images: ['jpg_1/myluche.jpg', 'jpg_2/myluche.jpg', 'jpg_3/myluche.jpg'] },
        { title: 'artist:hongbaise raw', images: ['jpg_1/hongbaise raw.jpg', 'jpg_2/hongbaise raw.jpg', 'jpg_3/hongbaise raw.jpg'] },
        { title: 'artist:franlol', images: ['jpg_1/franlol.jpg', 'jpg_2/franlol.jpg', 'jpg_3/franlol.jpg'] },
        { title: 'artist:ryuuzaki ichi', images: ['jpg_1/ryuuzaki ichi.jpg', 'jpg_2/ryuuzaki ichi.jpg', 'jpg_3/ryuuzaki ichi.jpg'] },
        { title: 'artist:matsuoka (mtok 0)', images: ['jpg_1/matsuoka (mtok 0).jpg', 'jpg_2/matsuoka (mtok 0).jpg', 'jpg_3/matsuoka (mtok 0).jpg'] },
        { title: 'artist:yuyumu', images: ['jpg_1/yuyumu.jpg', 'jpg_2/yuyumu.jpg', 'jpg_3/yuyumu.jpg'] },
        { title: 'artist:almualim', images: ['jpg_1/almualim.jpg', 'jpg_2/almualim.jpg', 'jpg_3/almualim.jpg'] },
        { title: 'artist:buri (retty9349)', images: ['jpg_1/buri (retty9349).jpg', 'jpg_2/buri (retty9349).jpg', 'jpg_3/buri (retty9349).jpg'] },
        { title: 'artist:huanxiang heitu', images: ['jpg_1/huanxiang heitu.jpg', 'jpg_2/huanxiang heitu.jpg', 'jpg_3/huanxiang heitu.jpg'] },
        { title: 'artist:naijiaer', images: ['jpg_1/naijiaer.jpg', 'jpg_2/naijiaer.jpg', 'jpg_3/naijiaer.jpg'] },
        { title: 'artist:miwano rag', images: ['jpg_1/miwano rag.jpg', 'jpg_2/miwano rag.jpg', 'jpg_3/miwano rag.jpg'] },
        { title: 'artist:houraku', images: ['jpg_1/houraku.jpg', 'jpg_2/houraku.jpg', 'jpg_3/houraku.jpg'] },
        { title: 'artist:void 0', images: ['jpg_1/void 0.jpg', 'jpg_2/void 0.jpg', 'jpg_3/void 0.jpg'] },
        { title: 'artist:kasuga haruhi', images: ['jpg_1/kasuga haruhi.jpg', 'jpg_2/kasuga haruhi.jpg', 'jpg_3/kasuga haruhi.jpg'] },
        { title: 'artist:gubbi on', images: ['jpg_1/gubbi on.jpg', 'jpg_2/gubbi on.jpg', 'jpg_3/gubbi on.jpg'] },
        { title: 'artist:laserflip', images: ['jpg_1/laserflip.jpg', 'jpg_2/laserflip.jpg', 'jpg_3/laserflip.jpg'] },
        { title: 'artist:mochirong', images: ['jpg_1/mochirong.jpg', 'jpg_2/mochirong.jpg', 'jpg_3/mochirong.jpg'] },
        { title: 'artist:opossumachine', images: ['jpg_1/opossumachine.jpg', 'jpg_2/opossumachine.jpg', 'jpg_3/opossumachine.jpg'] },
        { title: 'artist:sy4', images: ['jpg_1/sy4.jpg', 'jpg_2/sy4.jpg', 'jpg_3/sy4.jpg'] },
        { title: 'artist:koku', images: ['jpg_1/koku.jpg', 'jpg_2/koku.jpg', 'jpg_3/koku.jpg'] },
        { title: 'artist:atdan', images: ['jpg_1/atdan.jpg', 'jpg_2/atdan.jpg', 'jpg_3/atdan.jpg'] },
        { title: 'artist:izumi tsubasu', images: ['jpg_1/izumi tsubasu.jpg', 'jpg_2/izumi tsubasu.jpg', 'jpg_3/izumi tsubasu.jpg'] },
        { title: 'artist:hiten (hitenkei)', images: ['jpg_1/hiten (hitenkei).jpg', 'jpg_2/hiten (hitenkei).jpg', 'jpg_3/hiten (hitenkei).jpg'] },
        { title: 'artist:metaljelly', images: ['jpg_1/metaljelly.jpg', 'jpg_2/metaljelly.jpg', 'jpg_3/metaljelly.jpg'] },
        { title: 'artist:bitseon', images: ['jpg_1/bitseon.jpg', 'jpg_2/bitseon.jpg', 'jpg_3/bitseon.jpg'] },
        { title: 'artist:rkzrok', images: ['jpg_1/rkzrok.jpg', 'jpg_2/rkzrok.jpg', 'jpg_3/rkzrok.jpg'] },
        { title: 'artist:egami', images: ['jpg_1/egami.jpg', 'jpg_2/egami.jpg', 'jpg_3/egami.jpg'] },
        { title: 'artist:noriko (ni noriko)', images: ['jpg_1/noriko (ni noriko).jpg', 'jpg_2/noriko (ni noriko).jpg', 'jpg_3/noriko (ni noriko).jpg'] },
        { title: 'artist:miwabe sakura', images: ['jpg_1/miwabe sakura.jpg', 'jpg_2/miwabe sakura.jpg', 'jpg_3/miwabe sakura.jpg'] },
        { title: 'artist:kousaki rui', images: ['jpg_1/kousaki rui.jpg', 'jpg_2/kousaki rui.jpg', 'jpg_3/kousaki rui.jpg'] },
        { title: 'artist:40hara', images: ['jpg_1/40hara.jpg', 'jpg_2/40hara.jpg', 'jpg_3/40hara.jpg'] },
        { title: 'artist:shiokonbu', images: ['jpg_1/shiokonbu.jpg', 'jpg_2/shiokonbu.jpg', 'jpg_3/shiokonbu.jpg'] },
        { title: 'artist:nknknya', images: ['jpg_1/nknknya.jpg', 'jpg_2/nknknya.jpg', 'jpg_3/nknknya.jpg'] },
        { title: 'artist:watersnake', images: ['jpg_1/watersnake.jpg', 'jpg_2/watersnake.jpg', 'jpg_3/watersnake.jpg'] },
        { title: 'artist:ribiadan', images: ['jpg_1/ribiadan.jpg', 'jpg_2/ribiadan.jpg', 'jpg_3/ribiadan.jpg'] },
        { title: 'artist:haijin', images: ['jpg_1/haijin.jpg', 'jpg_2/haijin.jpg', 'jpg_3/haijin.jpg'] },
        { title: 'artist:hyouuma', images: ['jpg_1/hyouuma.jpg', 'jpg_2/hyouuma.jpg', 'jpg_3/hyouuma.jpg'] },
        { title: 'artist:asou (asabu202)', images: ['jpg_1/asou (asabu202).jpg', 'jpg_2/asou (asabu202).jpg', 'jpg_3/asou (asabu202).jpg'] },
        { title: 'artist:lilac (k32420276)', images: ['jpg_1/lilac (k32420276).jpg', 'jpg_2/lilac (k32420276).jpg', 'jpg_3/lilac (k32420276).jpg'] },
        { title: 'artist:blvefo9merunyaa', images: ['jpg_1/blvefo9merunyaa.jpg', 'jpg_2/blvefo9merunyaa.jpg', 'jpg_3/blvefo9merunyaa.jpg'] },
        { title: 'artist:pija (pianiishimo)', images: ['jpg_1/pija (pianiishimo).jpg', 'jpg_2/pija (pianiishimo).jpg', 'jpg_3/pija (pianiishimo).jpg'] },
        { title: 'artist:kawai (purplrpouni)', images: ['jpg_1/kawai (purplrpouni).jpg', 'jpg_2/kawai (purplrpouni).jpg', 'jpg_3/kawai (purplrpouni).jpg'] },
        { title: 'artist:iwamushi', images: ['jpg_1/iwamushi.jpg', 'jpg_2/iwamushi.jpg', 'jpg_3/iwamushi.jpg'] },
        { title: 'artist:saru', images: ['jpg_1/saru.jpg', 'jpg_2/saru.jpg', 'jpg_3/saru.jpg'] },
        { title: 'artist:muloli', images: ['jpg_1/muloli.jpg', 'jpg_2/muloli.jpg', 'jpg_3/muloli.jpg'] },
        { title: 'artist:kyokucho', images: ['jpg_1/kyokucho.jpg', 'jpg_2/kyokucho.jpg', 'jpg_3/kyokucho.jpg'] },
        { title: 'artist:aak', images: ['jpg_1/aak.jpg', 'jpg_2/aak.jpg', 'jpg_3/aak.jpg'] },
        { title: 'artist:usashiro mani', images: ['jpg_1/usashiro mani.jpg', 'jpg_2/usashiro mani.jpg', 'jpg_3/usashiro mani.jpg'] },
        { title: 'artist:momozu komamochi', images: ['jpg_1/momozu komamochi.jpg', 'jpg_2/momozu komamochi.jpg', 'jpg_3/momozu komamochi.jpg'] },
        { title: 'artist:cool-kyou shinja', images: ['jpg_1/cool-kyou shinja.jpg', 'jpg_2/cool-kyou shinja.jpg', 'jpg_3/cool-kyou shinja.jpg'] },
        { title: 'artist:coils', images: ['jpg_1/coils.jpg', 'jpg_2/coils.jpg', 'jpg_3/coils.jpg'] },
        { title: 'artist:shiratama (shiratamaco)', images: ['jpg_1/shiratama (shiratamaco).jpg', 'jpg_2/shiratama (shiratamaco).jpg', 'jpg_3/shiratama (shiratamaco).jpg'] },
        { title: 'artist:namie-kun', images: ['jpg_1/namie-kun.jpg', 'jpg_2/namie-kun.jpg', 'jpg_3/namie-kun.jpg'] },
        { title: 'artist:migolu', images: ['jpg_1/migolu.jpg', 'jpg_2/migolu.jpg', 'jpg_3/migolu.jpg'] },
        { title: 'artist:ruriri', images: ['jpg_1/ruriri.jpg', 'jpg_2/ruriri.jpg', 'jpg_3/ruriri.jpg'] },
        { title: 'artist:ame usari', images: ['jpg_1/ame usari.jpg', 'jpg_2/ame usari.jpg', 'jpg_3/ame usari.jpg'] },
        { title: 'artist:houkisei', images: ['jpg_1/houkisei.jpg', 'jpg_2/houkisei.jpg', 'jpg_3/houkisei.jpg'] },
        { title: 'artist:kankan33333', images: ['jpg_1/kankan33333.jpg', 'jpg_2/kankan33333.jpg', 'jpg_3/kankan33333.jpg'] },
        { title: 'artist:kuzuvine', images: ['jpg_1/kuzuvine.jpg', 'jpg_2/kuzuvine.jpg', 'jpg_3/kuzuvine.jpg'] },
        { title: 'artist:noyu (noyu23386566)', images: ['jpg_1/noyu (noyu23386566).jpg', 'jpg_2/noyu (noyu23386566).jpg', 'jpg_3/noyu (noyu23386566).jpg'] },
        { title: 'artist:alchemaniac', images: ['jpg_1/alchemaniac.jpg', 'jpg_2/alchemaniac.jpg', 'jpg_3/alchemaniac.jpg'] },
        { title: 'artist:pikaole', images: ['jpg_1/pikaole.jpg', 'jpg_2/pikaole.jpg', 'jpg_3/pikaole.jpg'] },
        { title: 'artist:amashiro natsuki', images: ['jpg_1/amashiro natsuki.jpg', 'jpg_2/amashiro natsuki.jpg', 'jpg_3/amashiro natsuki.jpg'] },
        { title: 'artist:riichu', images: ['jpg_1/riichu.jpg', 'jpg_2/riichu.jpg', 'jpg_3/riichu.jpg'] },
        { title: 'artist:ikeuchi tanuma', images: ['jpg_1/ikeuchi tanuma.jpg', 'jpg_2/ikeuchi tanuma.jpg', 'jpg_3/ikeuchi tanuma.jpg'] },
        { title: 'artist:sincos', images: ['jpg_1/sincos.jpg', 'jpg_2/sincos.jpg', 'jpg_3/sincos.jpg'] },
        { title: 'artist:cluseller', images: ['jpg_1/cluseller.jpg', 'jpg_2/cluseller.jpg', 'jpg_3/cluseller.jpg'] },
        { title: 'artist:vahn yourdoom', images: ['jpg_1/vahn yourdoom.jpg', 'jpg_2/vahn yourdoom.jpg', 'jpg_3/vahn yourdoom.jpg'] },
        { title: 'artist:q azieru', images: ['jpg_1/q azieru.jpg', 'jpg_2/q azieru.jpg', 'jpg_3/q azieru.jpg'] },
        { title: 'artist:militia minpei', images: ['jpg_1/militia minpei.jpg', 'jpg_2/militia minpei.jpg', 'jpg_3/militia minpei.jpg'] },
        { title: 'artist:saaal653', images: ['jpg_1/saaal653.jpg', 'jpg_2/saaal653.jpg', 'jpg_3/saaal653.jpg'] },
        { title: 'artist:hiememiko', images: ['jpg_1/hiememiko.jpg', 'jpg_2/hiememiko.jpg', 'jpg_3/hiememiko.jpg'] },
        { title: 'artist:nekoda (maoda)', images: ['jpg_1/nekoda (maoda).jpg', 'jpg_2/nekoda (maoda).jpg', 'jpg_3/nekoda (maoda).jpg'] },
        { title: 'artist:lolita channel', images: ['jpg_1/lolita channel.jpg', 'jpg_2/lolita channel.jpg', 'jpg_3/lolita channel.jpg'] },
        { title: 'artist:musouzuki', images: ['jpg_1/musouzuki.jpg', 'jpg_2/musouzuki.jpg', 'jpg_3/musouzuki.jpg'] },
        { title: 'artist:moketa', images: ['jpg_1/moketa.jpg', 'jpg_2/moketa.jpg', 'jpg_3/moketa.jpg'] },
        { title: 'artist:sora 72-iro', images: ['jpg_1/sora 72-iro.jpg', 'jpg_2/sora 72-iro.jpg', 'jpg_3/sora 72-iro.jpg'] },
        { title: 'artist:hacco mayu', images: ['jpg_1/hacco mayu.jpg', 'jpg_2/hacco mayu.jpg', 'jpg_3/hacco mayu.jpg'] },
        { title: 'artist:terasu mc', images: ['jpg_1/terasu mc.jpg', 'jpg_2/terasu mc.jpg', 'jpg_3/terasu mc.jpg'] },
        { title: 'artist:caisan', images: ['jpg_1/caisan.jpg', 'jpg_2/caisan.jpg', 'jpg_3/caisan.jpg'] },
        { title: 'artist:black bean', images: ['jpg_1/black bean.jpg', 'jpg_2/black bean.jpg', 'jpg_3/black bean.jpg'] },
        { title: 'artist:kakure eria', images: ['jpg_1/kakure eria.jpg', 'jpg_2/kakure eria.jpg', 'jpg_3/kakure eria.jpg'] },
        { title: 'artist:wakamesan', images: ['jpg_1/wakamesan.jpg', 'jpg_2/wakamesan.jpg', 'jpg_3/wakamesan.jpg'] },
        { title: 'artist:jornyhail', images: ['jpg_1/jornyhail.jpg', 'jpg_2/jornyhail.jpg', 'jpg_3/jornyhail.jpg'] },
        { title: 'artist:furau', images: ['jpg_1/furau.jpg', 'jpg_2/furau.jpg', 'jpg_3/furau.jpg'] },
        { title: 'artist:interstellar', images: ['jpg_1/interstellar.jpg', 'jpg_2/interstellar.jpg', 'jpg_3/interstellar.jpg'] },
        { title: 'artist:enarane', images: ['jpg_1/enarane.jpg', 'jpg_2/enarane.jpg', 'jpg_3/enarane.jpg'] },
        { title: 'artist:tokonone', images: ['jpg_1/tokonone.jpg', 'jpg_2/tokonone.jpg', 'jpg_3/tokonone.jpg'] },
        { title: 'artist:samneco', images: ['jpg_1/samneco.jpg', 'jpg_2/samneco.jpg', 'jpg_3/samneco.jpg'] },
        { title: 'artist:wanaata', images: ['jpg_1/wanaata.jpg', 'jpg_2/wanaata.jpg', 'jpg_3/wanaata.jpg'] },
        { title: 'artist:mabing', images: ['jpg_1/mabing.jpg', 'jpg_2/mabing.jpg', 'jpg_3/mabing.jpg'] },
        { title: 'artist:xinzoruo', images: ['jpg_1/xinzoruo.jpg', 'jpg_2/xinzoruo.jpg', 'jpg_3/xinzoruo.jpg'] },
        { title: 'artist:mikozin', images: ['jpg_1/mikozin.jpg', 'jpg_2/mikozin.jpg', 'jpg_3/mikozin.jpg'] },
        { title: 'artist:duoyuanjun', images: ['jpg_1/duoyuanjun.jpg', 'jpg_2/duoyuanjun.jpg', 'jpg_3/duoyuanjun.jpg'] },
        { title: 'artist:uekura eku', images: ['jpg_1/uekura eku.jpg', 'jpg_2/uekura eku.jpg', 'jpg_3/uekura eku.jpg'] },
        { title: 'artist:eta', images: ['jpg_1/eta.jpg', 'jpg_2/eta.jpg', 'jpg_3/eta.jpg'] },
        { title: 'artist:naga u', images: ['jpg_1/naga u.jpg', 'jpg_2/naga u.jpg', 'jpg_3/naga u.jpg'] },
        { title: 'artist:fukuro daizi', images: ['jpg_1/fukuro daizi.jpg', 'jpg_2/fukuro daizi.jpg', 'jpg_3/fukuro daizi.jpg'] },
        { title: 'artist:yiduan zhu', images: ['jpg_1/yiduan zhu.jpg', 'jpg_2/yiduan zhu.jpg', 'jpg_3/yiduan zhu.jpg'] },
        { title: 'artist:thomasz', images: ['jpg_1/thomasz.jpg', 'jpg_2/thomasz.jpg', 'jpg_3/thomasz.jpg'] },
        { title: 'artist:xiangzi box', images: ['jpg_1/xiangzi box.jpg', 'jpg_2/xiangzi box.jpg', 'jpg_3/xiangzi box.jpg'] },
        { title: 'artist:wakaba (945599620)', images: ['jpg_1/wakaba (945599620).jpg', 'jpg_2/wakaba (945599620).jpg', 'jpg_3/wakaba (945599620).jpg'] },
        { title: 'artist:narumame', images: ['jpg_1/narumame.jpg', 'jpg_2/narumame.jpg', 'jpg_3/narumame.jpg'] },
        { title: 'artist:f7(eiki)', images: ['jpg_1/f7(eiki).jpg', 'jpg_2/f7(eiki).jpg', 'jpg_3/f7(eiki).jpg'] },
        { title: 'artist:dokuro deluxe', images: ['jpg_1/dokuro deluxe.jpg', 'jpg_2/dokuro deluxe.jpg', 'jpg_3/dokuro deluxe.jpg'] },
        { title: 'artist:tira 27', images: ['jpg_1/tira 27.jpg', 'jpg_2/tira 27.jpg', 'jpg_3/tira 27.jpg'] },
        { title: 'artist:chahan (fried rice0614)', images: ['jpg_1/chahan (fried rice0614).jpg', 'jpg_2/chahan (fried rice0614).jpg', 'jpg_3/chahan (fried rice0614).jpg'] },
        { title: 'artist:qtonagi', images: ['jpg_1/qtonagi.jpg', 'jpg_2/qtonagi.jpg', 'jpg_3/qtonagi.jpg'] },
        { title: 'artist:kame (kamepan44231)', images: ['jpg_1/kame (kamepan44231).jpg', 'jpg_2/kame (kamepan44231).jpg', 'jpg_3/kame (kamepan44231).jpg'] },
        { title: 'artist:misekai 555', images: ['jpg_1/misekai 555.jpg', 'jpg_2/misekai 555.jpg', 'jpg_3/misekai 555.jpg'] },
        { title: 'artist:c.cu', images: ['jpg_1/c.cu.jpg', 'jpg_2/c.cu.jpg', 'jpg_3/c.cu.jpg'] },
        { title: 'artist:ao banana', images: ['jpg_1/ao banana.jpg', 'jpg_2/ao banana.jpg', 'jpg_3/ao banana.jpg'] },
        { title: 'artist:iuui', images: ['jpg_1/iuui.jpg', 'jpg_2/iuui.jpg', 'jpg_3/iuui.jpg'] },
        { title: 'artist:blood hood', images: ['jpg_1/blood hood.jpg', 'jpg_2/blood hood.jpg', 'jpg_3/blood hood.jpg'] },
        { title: 'artist:7010', images: ['jpg_1/7010.jpg', 'jpg_2/7010.jpg', 'jpg_3/7010.jpg'] },
        { title: 'artist:gsusart', images: ['jpg_1/gsusart.jpg', 'jpg_2/gsusart.jpg', 'jpg_3/gsusart.jpg'] },
        { title: 'artist:nuu (nu-nyu)', images: ['jpg_1/nuu (nu-nyu).jpg', 'jpg_2/nuu (nu-nyu).jpg', 'jpg_3/nuu (nu-nyu).jpg'] },
        { title: 'artist:norza', images: ['jpg_1/norza.jpg', 'jpg_2/norza.jpg', 'jpg_3/norza.jpg'] },
        { title: 'artist:nephthys2356', images: ['jpg_1/nephthys2356.jpg', 'jpg_2/nephthys2356.jpg', 'jpg_3/nephthys2356.jpg'] },
        { title: 'artist:shnva', images: ['jpg_1/shnva.jpg', 'jpg_2/shnva.jpg', 'jpg_3/shnva.jpg'] },
        { title: 'artist:bee (deadflow)', images: ['jpg_1/bee (deadflow).jpg', 'jpg_2/bee (deadflow).jpg', 'jpg_3/bee (deadflow).jpg'] },
        { title: 'artist:haguhagu (rinjuu circus)', images: ['jpg_1/haguhagu (rinjuu circus).jpg', 'jpg_2/haguhagu (rinjuu circus).jpg', 'jpg_3/haguhagu (rinjuu circus).jpg'] },
        { title: 'artist:ginklaga', images: ['jpg_1/ginklaga.jpg', 'jpg_2/ginklaga.jpg', 'jpg_3/ginklaga.jpg'] },
        { title: 'artist:shanyao jiang tororo', images: ['jpg_1/shanyao jiang tororo.jpg', 'jpg_2/shanyao jiang tororo.jpg', 'jpg_3/shanyao jiang tororo.jpg'] },
        { title: 'artist:shirotaka (shirotaka)', images: ['jpg_1/shirotaka (shirotaka).jpg', 'jpg_2/shirotaka (shirotaka).jpg', 'jpg_3/shirotaka (shirotaka).jpg'] },
        { title: 'artist:sakatsuki yakumo', images: ['jpg_1/sakatsuki yakumo.jpg', 'jpg_2/sakatsuki yakumo.jpg', 'jpg_3/sakatsuki yakumo.jpg'] },
        { title: 'artist:sarcophage', images: ['jpg_1/sarcophage.jpg', 'jpg_2/sarcophage.jpg', 'jpg_3/sarcophage.jpg'] },
        { title: 'artist:shiratama (hockey)', images: ['jpg_1/shiratama (hockey).jpg', 'jpg_2/shiratama (hockey).jpg', 'jpg_3/shiratama (hockey).jpg'] },
        { title: 'artist:shibuya (kurokamishain)', images: ['jpg_1/shibuya (kurokamishain).jpg', 'jpg_2/shibuya (kurokamishain).jpg', 'jpg_3/shibuya (kurokamishain).jpg'] },
        { title: 'artist:ro g (oowack)', images: ['jpg_1/ro g (oowack).jpg', 'jpg_2/ro g (oowack).jpg', 'jpg_3/ro g (oowack).jpg'] },
        { title: 'artist:akizero1510', images: ['jpg_1/akizero1510.jpg', 'jpg_2/akizero1510.jpg', 'jpg_3/akizero1510.jpg'] },
        { title: 'artist:hime gyo', images: ['jpg_1/hime gyo.jpg', 'jpg_2/hime gyo.jpg', 'jpg_3/hime gyo.jpg'] },
        { title: 'artist:yatsuhashi kakera', images: ['jpg_1/yatsuhashi kakera.jpg', 'jpg_2/yatsuhashi kakera.jpg', 'jpg_3/yatsuhashi kakera.jpg'] },
        { title: 'artist:healthyman', images: ['jpg_1/healthyman.jpg', 'jpg_2/healthyman.jpg', 'jpg_3/healthyman.jpg'] },
        { title: 'artist:nanja', images: ['jpg_1/nanja.jpg', 'jpg_2/nanja.jpg', 'jpg_3/nanja.jpg'] },
        { title: 'artist:rourou ill', images: ['jpg_1/rourou ill.jpg', 'jpg_2/rourou ill.jpg', 'jpg_3/rourou ill.jpg'] },
        { title: 'artist:sirfy', images: ['jpg_1/sirfy.jpg', 'jpg_2/sirfy.jpg', 'jpg_3/sirfy.jpg'] },
        { title: 'artist:nanakusa', images: ['jpg_1/nanakusa.jpg', 'jpg_2/nanakusa.jpg', 'jpg_3/nanakusa.jpg'] },
        { title: 'artist:atte nanakusa', images: ['jpg_1/atte nanakusa.jpg', 'jpg_2/atte nanakusa.jpg', 'jpg_3/atte nanakusa.jpg'] },
        { title: 'artist:timbougami', images: ['jpg_1/timbougami.jpg', 'jpg_2/timbougami.jpg', 'jpg_3/timbougami.jpg'] },
        { title: 'artist:muroku (aimichiyo0526)', images: ['jpg_1/muroku (aimichiyo0526).jpg', 'jpg_2/muroku (aimichiyo0526).jpg', 'jpg_3/muroku (aimichiyo0526).jpg'] },
        { title: 'artist:mika pikazo', images: ['jpg_1/mika pikazo.jpg', 'jpg_2/mika pikazo.jpg', 'jpg_3/mika pikazo.jpg'] },
        { title: 'artist:fuya (tempupupu)', images: ['jpg_1/fuya (tempupupu).jpg', 'jpg_2/fuya (tempupupu).jpg', 'jpg_3/fuya (tempupupu).jpg'] },
        { title: 'artist:eonsang', images: ['jpg_1/eonsang.jpg', 'jpg_2/eonsang.jpg', 'jpg_3/eonsang.jpg'] },
        { title: 'artist:mile (off8mile)', images: ['jpg_1/mile (off8mile).jpg', 'jpg_2/mile (off8mile).jpg', 'jpg_3/mile (off8mile).jpg'] },
        { title: 'artist:tsukino wagamo', images: ['jpg_1/tsukino wagamo.jpg', 'jpg_2/tsukino wagamo.jpg', 'jpg_3/tsukino wagamo.jpg'] },
        { title: 'artist:lack', images: ['jpg_1/lack.jpg', 'jpg_2/lack.jpg', 'jpg_3/lack.jpg'] },
        { title: 'artist:cloba', images: ['jpg_1/cloba.jpg', 'jpg_2/cloba.jpg', 'jpg_3/cloba.jpg'] },
        { title: 'artist:seorang', images: ['jpg_1/seorang.jpg', 'jpg_2/seorang.jpg', 'jpg_3/seorang.jpg'] },
        { title: 'artist:miazi', images: ['jpg_1/miazi.jpg', 'jpg_2/miazi.jpg', 'jpg_3/miazi.jpg'] },
        { title: 'artist:atahuta', images: ['jpg_1/atahuta.jpg', 'jpg_2/atahuta.jpg', 'jpg_3/atahuta.jpg'] },
        { title: 'artist:torriet', images: ['jpg_1/torriet.jpg', 'jpg_2/torriet.jpg', 'jpg_3/torriet.jpg'] },
        { title: 'artist:deyui', images: ['jpg_1/deyui.jpg', 'jpg_2/deyui.jpg', 'jpg_3/deyui.jpg'] },
        { title: 'artist:rurudo', images: ['jpg_1/rurudo.jpg', 'jpg_2/rurudo.jpg', 'jpg_3/rurudo.jpg'] },
        { title: 'artist:xsurugax', images: ['jpg_1/xsurugax.jpg', 'jpg_2/xsurugax.jpg', 'jpg_3/xsurugax.jpg'] },
        { title: 'artist:miyase mahiro', images: ['jpg_1/miyase mahiro.jpg', 'jpg_2/miyase mahiro.jpg', 'jpg_3/miyase mahiro.jpg'] },
        { title: 'artist:omurice (roza4957)', images: ['jpg_1/omurice (roza4957).jpg', 'jpg_2/omurice (roza4957).jpg', 'jpg_3/omurice (roza4957).jpg'] },
        { title: 'artist:patzzi', images: ['jpg_1/patzzi.jpg', 'jpg_2/patzzi.jpg', 'jpg_3/patzzi.jpg'] },
        { title: 'artist:kawakami rokkaku', images: ['jpg_1/kawakami rokkaku.jpg', 'jpg_2/kawakami rokkaku.jpg', 'jpg_3/kawakami rokkaku.jpg'] },
        { title: 'artist:janong', images: ['jpg_1/janong.jpg', 'jpg_2/janong.jpg', 'jpg_3/janong.jpg'] },
        { title: 'artist:goldowl', images: ['jpg_1/goldowl.jpg', 'jpg_2/goldowl.jpg', 'jpg_3/goldowl.jpg'] },
        { title: 'artist:z-ton', images: ['jpg_1/z-ton.jpg', 'jpg_2/z-ton.jpg', 'jpg_3/z-ton.jpg'] },
        { title: 'artist:henkuma', images: ['jpg_1/henkuma.jpg', 'jpg_2/henkuma.jpg', 'jpg_3/henkuma.jpg'] },
        { title: 'artist:j.k.', images: ['jpg_1/j.k..jpg', 'jpg_2/j.k..jpg', 'jpg_3/j.k..jpg'] },
        { title: 'artist:robo mikan', images: ['jpg_1/robo mikan.jpg', 'jpg_2/robo mikan.jpg', 'jpg_3/robo mikan.jpg'] },
        { title: 'artist:takeda hiromitsu', images: ['jpg_1/takeda hiromitsu.jpg', 'jpg_2/takeda hiromitsu.jpg', 'jpg_3/takeda hiromitsu.jpg'] },
        { title: 'artist:iwao178', images: ['jpg_1/iwao178.jpg', 'jpg_2/iwao178.jpg', 'jpg_3/iwao178.jpg'] },
        { title: 'artist:sanagi torajirou', images: ['jpg_1/sanagi torajirou.jpg', 'jpg_2/sanagi torajirou.jpg', 'jpg_3/sanagi torajirou.jpg'] },
        { title: 'artist:yoru aruki', images: ['jpg_1/yoru aruki.jpg', 'jpg_2/yoru aruki.jpg', 'jpg_3/yoru aruki.jpg'] },
        { title: 'artist:puge', images: ['jpg_1/puge.jpg', 'jpg_2/puge.jpg', 'jpg_3/puge.jpg'] },
        { title: 'artist:futon (kitsune tsuki)', images: ['jpg_1/futon (kitsune tsuki).jpg', 'jpg_2/futon (kitsune tsuki).jpg', 'jpg_3/futon (kitsune tsuki).jpg'] },
        { title: 'artist:skyrick9413', images: ['jpg_1/skyrick9413.jpg', 'jpg_2/skyrick9413.jpg', 'jpg_3/skyrick9413.jpg'] },
        { title: 'artist:alu.m (alpcmas)', images: ['jpg_1/alu.m (alpcmas).jpg', 'jpg_2/alu.m (alpcmas).jpg', 'jpg_3/alu.m (alpcmas).jpg'] },
        { title: 'artist:cinkai', images: ['jpg_1/cinkai.jpg', 'jpg_2/cinkai.jpg', 'jpg_3/cinkai.jpg'] },
        { title: 'artist:monikano', images: ['jpg_1/monikano.jpg', 'jpg_2/monikano.jpg', 'jpg_3/monikano.jpg'] },
        { title: 'artist:ebiblue', images: ['jpg_1/ebiblue.jpg', 'jpg_2/ebiblue.jpg', 'jpg_3/ebiblue.jpg'] },
        { title: 'artist:doskoinpo', images: ['jpg_1/doskoinpo.jpg', 'jpg_2/doskoinpo.jpg', 'jpg_3/doskoinpo.jpg'] },
        { title: 'artist:jairou', images: ['jpg_1/jairou.jpg', 'jpg_2/jairou.jpg', 'jpg_3/jairou.jpg'] },
        { title: 'artist:shokushi yuu', images: ['jpg_1/shokushi yuu.jpg', 'jpg_2/shokushi yuu.jpg', 'jpg_3/shokushi yuu.jpg'] },
        { title: 'artist:kyo (kuroichigo)', images: ['jpg_1/kyo (kuroichigo).jpg', 'jpg_2/kyo (kuroichigo).jpg', 'jpg_3/kyo (kuroichigo).jpg'] },
        { title: 'artist:shamakho', images: ['jpg_1/shamakho.jpg', 'jpg_2/shamakho.jpg', 'jpg_3/shamakho.jpg'] },
        { title: 'artist:ironlily', images: ['jpg_1/ironlily.jpg', 'jpg_2/ironlily.jpg', 'jpg_3/ironlily.jpg'] },
        { title: 'artist:vanripper', images: ['jpg_1/vanripper.jpg', 'jpg_2/vanripper.jpg', 'jpg_3/vanripper.jpg'] },
        { title: 'artist:vania600', images: ['jpg_1/vania600.jpg', 'jpg_2/vania600.jpg', 'jpg_3/vania600.jpg'] },
        { title: 'artist:zomzomzomsauce', images: ['jpg_1/zomzomzomsauce.jpg', 'jpg_2/zomzomzomsauce.jpg', 'jpg_3/zomzomzomsauce.jpg'] },
        { title: 'artist:shiro9jira', images: ['jpg_1/shiro9jira.jpg', 'jpg_2/shiro9jira.jpg', 'jpg_3/shiro9jira.jpg'] },
        { title: 'artist:wada kazu', images: ['jpg_1/wada kazu.jpg', 'jpg_2/wada kazu.jpg', 'jpg_3/wada kazu.jpg'] },
        { title: 'artist:wada arco', images: ['jpg_1/wada arco.jpg', 'jpg_2/wada arco.jpg', 'jpg_3/wada arco.jpg'] },
        { title: 'artist:kuroboshi kouhaku', images: ['jpg_1/kuroboshi kouhaku.jpg', 'jpg_2/kuroboshi kouhaku.jpg', 'jpg_3/kuroboshi kouhaku.jpg'] },
        { title: 'artist:blushyspicy', images: ['jpg_1/blushyspicy.jpg', 'jpg_2/blushyspicy.jpg', 'jpg_3/blushyspicy.jpg'] },
        { title: 'artist:redrop', images: ['jpg_1/redrop.jpg', 'jpg_2/redrop.jpg', 'jpg_3/redrop.jpg'] },
        { title: 'artist:na tarapisu153', images: ['jpg_1/na tarapisu153.jpg', 'jpg_2/na tarapisu153.jpg', 'jpg_3/na tarapisu153.jpg'] },
        { title: 'artist:azuuru', images: ['jpg_1/azuuru.jpg', 'jpg_2/azuuru.jpg', 'jpg_3/azuuru.jpg'] },
        { title: 'artist:ellie iunai zhuyi zhe', images: ['jpg_1/ellie iunai zhuyi zhe.jpg', 'jpg_2/ellie iunai zhuyi zhe.jpg', 'jpg_3/ellie iunai zhuyi zhe.jpg'] },
        { title: 'artist:mihifu', images: ['jpg_1/mihifu.jpg', 'jpg_2/mihifu.jpg', 'jpg_3/mihifu.jpg'] },
        { title: 'artist:dema hmw', images: ['jpg_1/dema hmw.jpg', 'jpg_2/dema hmw.jpg', 'jpg_3/dema hmw.jpg'] },
        { title: 'artist:projecttiger', images: ['jpg_1/projecttiger.jpg', 'jpg_2/projecttiger.jpg', 'jpg_3/projecttiger.jpg'] },
        { title: 'artist:ryouma (galley)', images: ['jpg_1/ryouma (galley).jpg', 'jpg_2/ryouma (galley).jpg', 'jpg_3/ryouma (galley).jpg'] },
        { title: 'artist:freeze-ex', images: ['jpg_1/freeze-ex.jpg', 'jpg_2/freeze-ex.jpg', 'jpg_3/freeze-ex.jpg'] },
        { title: 'artist:erica (naze1940)', images: ['jpg_1/erica (naze1940).jpg', 'jpg_2/erica (naze1940).jpg', 'jpg_3/erica (naze1940).jpg'] },
        { title: 'artist:par0llel', images: ['jpg_1/par0llel.jpg', 'jpg_2/par0llel.jpg', 'jpg_3/par0llel.jpg'] },
        { title: 'artist:eeyoosekedooaat', images: ['jpg_1/eeyoosekedooaat.jpg', 'jpg_2/eeyoosekedooaat.jpg', 'jpg_3/eeyoosekedooaat.jpg'] },
        { title: 'artist:fight yoghurt', images: ['jpg_1/fight yoghurt.jpg', 'jpg_2/fight yoghurt.jpg', 'jpg_3/fight yoghurt.jpg'] },
        { title: 'artist:annin musou', images: ['jpg_1/annin musou.jpg', 'jpg_2/annin musou.jpg', 'jpg_3/annin musou.jpg'] },
        { title: 'artist:mathiamo13', images: ['jpg_1/mathiamo13.jpg', 'jpg_2/mathiamo13.jpg', 'jpg_3/mathiamo13.jpg'] },
        { title: 'artist:moco (moco 28)', images: ['jpg_1/moco (moco 28).jpg', 'jpg_2/moco (moco 28).jpg', 'jpg_3/moco (moco 28).jpg'] },
        { title: 'artist:ruberule', images: ['jpg_1/ruberule.jpg', 'jpg_2/ruberule.jpg', 'jpg_3/ruberule.jpg'] },
        { title: 'artist:patch oxxo', images: ['jpg_1/patch oxxo.jpg', 'jpg_2/patch oxxo.jpg', 'jpg_3/patch oxxo.jpg'] },
        { title: 'artist:blueblossom', images: ['jpg_1/blueblossom.jpg', 'jpg_2/blueblossom.jpg', 'jpg_3/blueblossom.jpg'] },
        { title: 'artist:afternooners', images: ['jpg_1/afternooners.jpg', 'jpg_2/afternooners.jpg', 'jpg_3/afternooners.jpg'] },
        { title: 'artist:kyuuba melo', images: ['jpg_1/kyuuba melo.jpg', 'jpg_2/kyuuba melo.jpg', 'jpg_3/kyuuba melo.jpg'] },
        { title: 'artist:chooco (chocoshi)', images: ['jpg_1/chooco (chocoshi).jpg', 'jpg_2/chooco (chocoshi).jpg', 'jpg_3/chooco (chocoshi).jpg'] },
        { title: 'artist:reiko lape', images: ['jpg_1/reiko lape.jpg', 'jpg_2/reiko lape.jpg', 'jpg_3/reiko lape.jpg'] },
        { title: 'artist:ichiyou moka', images: ['jpg_1/ichiyou moka.jpg', 'jpg_2/ichiyou moka.jpg', 'jpg_3/ichiyou moka.jpg'] },
        { title: 'artist:gwan-e', images: ['jpg_1/gwan-e.jpg', 'jpg_2/gwan-e.jpg', 'jpg_3/gwan-e.jpg'] },
        { title: 'artist:sabotensuteeki', images: ['jpg_1/sabotensuteeki.jpg', 'jpg_2/sabotensuteeki.jpg', 'jpg_3/sabotensuteeki.jpg'] },
        { title: 'artist:blobcg', images: ['jpg_1/blobcg.jpg', 'jpg_2/blobcg.jpg', 'jpg_3/blobcg.jpg'] },
        { title: 'artist:nakatama kyou', images: ['jpg_1/nakatama kyou.jpg', 'jpg_2/nakatama kyou.jpg', 'jpg_3/nakatama kyou.jpg'] },
        { title: 'artist:rat huang', images: ['jpg_1/rat huang.jpg', 'jpg_2/rat huang.jpg', 'jpg_3/rat huang.jpg'] },
        { title: 'artist:yunagi amane', images: ['jpg_1/yunagi amane.jpg', 'jpg_2/yunagi amane.jpg', 'jpg_3/yunagi amane.jpg'] },
        { title: 'artist:torimaru', images: ['jpg_1/torimaru.jpg', 'jpg_2/torimaru.jpg', 'jpg_3/torimaru.jpg'] },
        { title: 'artist:natsuhiko', images: ['jpg_1/natsuhiko.jpg', 'jpg_2/natsuhiko.jpg', 'jpg_3/natsuhiko.jpg'] },
        { title: 'artist:teddypocky', images: ['jpg_1/teddypocky.jpg', 'jpg_2/teddypocky.jpg', 'jpg_3/teddypocky.jpg'] },
        { title: 'artist:erufura', images: ['jpg_1/erufura.jpg', 'jpg_2/erufura.jpg', 'jpg_3/erufura.jpg'] },
        { title: 'artist:otokobara', images: ['jpg_1/otokobara.jpg', 'jpg_2/otokobara.jpg', 'jpg_3/otokobara.jpg'] },
        { title: 'artist:rapa rachi', images: ['jpg_1/rapa rachi.jpg', 'jpg_2/rapa rachi.jpg', 'jpg_3/rapa rachi.jpg'] },
        { title: 'artist:jewel (the black canvas)', images: ['jpg_1/jewel (the black canvas).jpg', 'jpg_2/jewel (the black canvas).jpg', 'jpg_3/jewel (the black canvas).jpg'] },
        { title: 'artist:hiiro h', images: ['jpg_1/hiiro h.jpg', 'jpg_2/hiiro h.jpg', 'jpg_3/hiiro h.jpg'] },
        { title: 'artist:feikyart', images: ['jpg_1/feikyart.jpg', 'jpg_2/feikyart.jpg', 'jpg_3/feikyart.jpg'] },
        { title: 'artist:omoti (1201208)', images: ['jpg_1/omoti (1201208).jpg', 'jpg_2/omoti (1201208).jpg', 'jpg_3/omoti (1201208).jpg'] },
        { title: 'artist:kiramarukou', images: ['jpg_1/kiramarukou.jpg', 'jpg_2/kiramarukou.jpg', 'jpg_3/kiramarukou.jpg'] },
        { title: 'artist:weisuoxin', images: ['jpg_1/weisuoxin.jpg', 'jpg_2/weisuoxin.jpg', 'jpg_3/weisuoxin.jpg'] },
        { title: 'artist:finalcake', images: ['jpg_1/finalcake.jpg', 'jpg_2/finalcake.jpg', 'jpg_3/finalcake.jpg'] },
        { title: 'artist:reiku09', images: ['jpg_1/reiku09.jpg', 'jpg_2/reiku09.jpg', 'jpg_3/reiku09.jpg'] },
        { title: 'artist:iinagi (kashiwa keira)', images: ['jpg_1/iinagi (kashiwa keira).jpg', 'jpg_2/iinagi (kashiwa keira).jpg', 'jpg_3/iinagi (kashiwa keira).jpg'] },
        { title: 'artist:cipher4109', images: ['jpg_1/cipher4109.jpg', 'jpg_2/cipher4109.jpg', 'jpg_3/cipher4109.jpg'] },
        { title: 'artist:nozora yuzu', images: ['jpg_1/nozora yuzu.jpg', 'jpg_2/nozora yuzu.jpg', 'jpg_3/nozora yuzu.jpg'] },
        { title: 'artist:turbulence', images: ['jpg_1/turbulence.jpg', 'jpg_2/turbulence.jpg', 'jpg_3/turbulence.jpg'] },
        { title: 'artist:kairunoburogu', images: ['jpg_1/kairunoburogu.jpg', 'jpg_2/kairunoburogu.jpg', 'jpg_3/kairunoburogu.jpg'] },
        { title: 'artist:donburi (donburikazoku)', images: ['jpg_1/donburi (donburikazoku).jpg', 'jpg_2/donburi (donburikazoku).jpg', 'jpg_3/donburi (donburikazoku).jpg'] },
        { title: 'artist:bartolomeobari', images: ['jpg_1/bartolomeobari.jpg', 'jpg_2/bartolomeobari.jpg', 'jpg_3/bartolomeobari.jpg'] },
        { title: 'artist:neocoill', images: ['jpg_1/neocoill.jpg', 'jpg_2/neocoill.jpg', 'jpg_3/neocoill.jpg'] },
        { title: 'artist:kaede (sayappa)', images: ['jpg_1/kaede (sayappa).jpg', 'jpg_2/kaede (sayappa).jpg', 'jpg_3/kaede (sayappa).jpg'] },
        { title: 'artist:whispering for nothing', images: ['jpg_1/whispering for nothing.jpg', 'jpg_2/whispering for nothing.jpg', 'jpg_3/whispering for nothing.jpg'] },
        { title: 'artist:nico-mo', images: ['jpg_1/nico-mo.jpg', 'jpg_2/nico-mo.jpg', 'jpg_3/nico-mo.jpg'] },
        { title: 'artist:fukuda shuushi', images: ['jpg_1/fukuda shuushi.jpg', 'jpg_2/fukuda shuushi.jpg', 'jpg_3/fukuda shuushi.jpg'] },
        { title: 'artist:kobinbin', images: ['jpg_1/kobinbin.jpg', 'jpg_2/kobinbin.jpg', 'jpg_3/kobinbin.jpg'] },
        { title: 'artist:suzuya (maru)', images: ['jpg_1/suzuya (maru).jpg', 'jpg_2/suzuya (maru).jpg', 'jpg_3/suzuya (maru).jpg'] },
        { title: 'artist:m.q (mqkyrie)', images: ['jpg_1/m.q (mqkyrie).jpg', 'jpg_2/m.q (mqkyrie).jpg', 'jpg_3/m.q (mqkyrie).jpg'] },
        { title: 'artist:torano', images: ['jpg_1/torano.jpg', 'jpg_2/torano.jpg', 'jpg_3/torano.jpg'] },
        { title: 'artist:kenatosne', images: ['jpg_1/kenatosne.jpg', 'jpg_2/kenatosne.jpg', 'jpg_3/kenatosne.jpg'] },
        { title: 'artist:comodox', images: ['jpg_1/comodox.jpg', 'jpg_2/comodox.jpg', 'jpg_3/comodox.jpg'] },
        { title: 'artist:hungry clicker', images: ['jpg_1/hungry clicker.jpg', 'jpg_2/hungry clicker.jpg', 'jpg_3/hungry clicker.jpg'] },
        { title: 'artist:incase', images: ['jpg_1/incase.jpg', 'jpg_2/incase.jpg', 'jpg_3/incase.jpg'] },

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