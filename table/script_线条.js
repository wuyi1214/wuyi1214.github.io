

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
    
    const totalRows = 121; // 总行数（示例数据，实际应动态获取）


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
        { title: 'artist:choujiroo', images: ['jpg_1/choujiroo.jpg', 'jpg_2/choujiroo.jpg', 'jpg_3/choujiroo.jpg'] },
        { title: 'artist:reagan long', images: ['jpg_1/reagan long.jpg', 'jpg_2/reagan long.jpg', 'jpg_3/reagan long.jpg'] },
        { title: 'artist:tomawarinosuizou', images: ['jpg_1/tomawarinosuizou.jpg', 'jpg_2/tomawarinosuizou.jpg', 'jpg_3/tomawarinosuizou.jpg'] },
        { title: 'artist:suzuki toto', images: ['jpg_1/suzuki toto.jpg', 'jpg_2/suzuki toto.jpg', 'jpg_3/suzuki toto.jpg'] },
        { title: 'artist:eip (pepai)', images: ['jpg_1/eip (pepai).jpg', 'jpg_2/eip (pepai).jpg', 'jpg_3/eip (pepai).jpg'] },
        { title: 'artist:mizumizuni', images: ['jpg_1/mizumizuni.jpg', 'jpg_2/mizumizuni.jpg', 'jpg_3/mizumizuni.jpg'] },
        { title: 'artist:hanjuku choco-pai', images: ['jpg_1/hanjuku choco-pai.jpg', 'jpg_2/hanjuku choco-pai.jpg', 'jpg_3/hanjuku choco-pai.jpg'] },
        { title: 'artist:siu (siu0207)', images: ['jpg_1/siu (siu0207).jpg', 'jpg_2/siu (siu0207).jpg', 'jpg_3/siu (siu0207).jpg'] },
        { title: 'artist:9x2no18', images: ['jpg_1/9x2no18.jpg', 'jpg_2/9x2no18.jpg', 'jpg_3/9x2no18.jpg'] },
        { title: 'artist:yewang19', images: ['jpg_1/yewang19.jpg', 'jpg_2/yewang19.jpg', 'jpg_3/yewang19.jpg'] },
        { title: 'artist:houtengeki', images: ['jpg_1/houtengeki.jpg', 'jpg_2/houtengeki.jpg', 'jpg_3/houtengeki.jpg'] },
        { title: 'artist:momo no sukebe', images: ['jpg_1/momo no sukebe.jpg', 'jpg_2/momo no sukebe.jpg', 'jpg_3/momo no sukebe.jpg'] },
        { title: 'artist:spicy moo', images: ['jpg_1/spicy moo.jpg', 'jpg_2/spicy moo.jpg', 'jpg_3/spicy moo.jpg'] },
        { title: 'artist:wagashi928', images: ['jpg_1/wagashi928.jpg', 'jpg_2/wagashi928.jpg', 'jpg_3/wagashi928.jpg'] },
        { title: 'artist:ogipote', images: ['jpg_1/ogipote.jpg', 'jpg_2/ogipote.jpg', 'jpg_3/ogipote.jpg'] },
        { title: 'artist:sutorora', images: ['jpg_1/sutorora.jpg', 'jpg_2/sutorora.jpg', 'jpg_3/sutorora.jpg'] },
        { title: 'artist:sayori (oskn)', images: ['jpg_1/sayori (oskn).jpg', 'jpg_2/sayori (oskn).jpg', 'jpg_3/sayori (oskn).jpg'] },
        { title: 'artist:tamanoi peromekuri', images: ['jpg_1/tamanoi peromekuri.jpg', 'jpg_2/tamanoi peromekuri.jpg', 'jpg_3/tamanoi peromekuri.jpg'] },
        { title: 'artist:wagashi (dagashiya)', images: ['jpg_1/wagashi (dagashiya).jpg', 'jpg_2/wagashi (dagashiya).jpg', 'jpg_3/wagashi (dagashiya).jpg'] },
        { title: 'artist:mikokomiyazawa', images: ['jpg_1/mikokomiyazawa.jpg', 'jpg_2/mikokomiyazawa.jpg', 'jpg_3/mikokomiyazawa.jpg'] },
        { title: 'artist:yuki (asayuki101)', images: ['jpg_1/yuki (asayuki101).jpg', 'jpg_2/yuki (asayuki101).jpg', 'jpg_3/yuki (asayuki101).jpg'] },
        { title: 'artist:jp06', images: ['jpg_1/jp06.jpg', 'jpg_2/jp06.jpg', 'jpg_3/jp06.jpg'] },
        { title: 'artist:mell (dmwe3537)', images: ['jpg_1/mell (dmwe3537).jpg', 'jpg_2/mell (dmwe3537).jpg', 'jpg_3/mell (dmwe3537).jpg'] },
        { title: 'artist:bow (bhp)', images: ['jpg_1/bow (bhp).jpg', 'jpg_2/bow (bhp).jpg', 'jpg_3/bow (bhp).jpg'] },
        { title: 'artist:nikuatsu magician shinbo', images: ['jpg_1/nikuatsu magician shinbo.jpg', 'jpg_2/nikuatsu magician shinbo.jpg', 'jpg_3/nikuatsu magician shinbo.jpg'] },
        { title: 'artist:onono imoko', images: ['jpg_1/onono imoko.jpg', 'jpg_2/onono imoko.jpg', 'jpg_3/onono imoko.jpg'] },
        { title: 'artist:mimonel', images: ['jpg_1/mimonel.jpg', 'jpg_2/mimonel.jpg', 'jpg_3/mimonel.jpg'] },
        { title: 'artist:rororogi mogera', images: ['jpg_1/rororogi mogera.jpg', 'jpg_2/rororogi mogera.jpg', 'jpg_3/rororogi mogera.jpg'] },
        { title: 'artist:blade (galaxist)', images: ['jpg_1/blade (galaxist).jpg', 'jpg_2/blade (galaxist).jpg', 'jpg_3/blade (galaxist).jpg'] },
        { title: 'artist:hara (harayutaka)', images: ['jpg_1/hara (harayutaka).jpg', 'jpg_2/hara (harayutaka).jpg', 'jpg_3/hara (harayutaka).jpg'] },
        { title: 'artist:kantoku', images: ['jpg_1/kantoku.jpg', 'jpg_2/kantoku.jpg', 'jpg_3/kantoku.jpg'] },
        { title: 'artist:boris (noborhys)', images: ['jpg_1/boris (noborhys).jpg', 'jpg_2/boris (noborhys).jpg', 'jpg_3/boris (noborhys).jpg'] },
        { title: 'artist:enkyo yuuichirou', images: ['jpg_1/enkyo yuuichirou.jpg', 'jpg_2/enkyo yuuichirou.jpg', 'jpg_3/enkyo yuuichirou.jpg'] },
        { title: 'artist:merunyaa', images: ['jpg_1/merunyaa.jpg', 'jpg_2/merunyaa.jpg', 'jpg_3/merunyaa.jpg'] },
        { title: 'artist:chanta (ayatakaoisii)', images: ['jpg_1/chanta (ayatakaoisii).jpg', 'jpg_2/chanta (ayatakaoisii).jpg', 'jpg_3/chanta (ayatakaoisii).jpg'] },
        { title: 'artist:tukiwani', images: ['jpg_1/tukiwani.jpg', 'jpg_2/tukiwani.jpg', 'jpg_3/tukiwani.jpg'] },
        { title: 'artist:nikorashi-ka', images: ['jpg_1/nikorashi-ka.jpg', 'jpg_2/nikorashi-ka.jpg', 'jpg_3/nikorashi-ka.jpg'] },
        { title: 'artist:kilye kairi', images: ['jpg_1/kilye kairi.jpg', 'jpg_2/kilye kairi.jpg', 'jpg_3/kilye kairi.jpg'] },
        { title: 'artist:satou kibi', images: ['jpg_1/satou kibi.jpg', 'jpg_2/satou kibi.jpg', 'jpg_3/satou kibi.jpg'] },
        { title: 'artist:kelvin hiu', images: ['jpg_1/kelvin hiu.jpg', 'jpg_2/kelvin hiu.jpg', 'jpg_3/kelvin hiu.jpg'] },
        { title: 'artist:kuri choko', images: ['jpg_1/kuri choko.jpg', 'jpg_2/kuri choko.jpg', 'jpg_3/kuri choko.jpg'] },
        { title: 'artist:hxxg', images: ['jpg_1/hxxg.jpg', 'jpg_2/hxxg.jpg', 'jpg_3/hxxg.jpg'] },
        { title: 'artist:menthako', images: ['jpg_1/menthako.jpg', 'jpg_2/menthako.jpg', 'jpg_3/menthako.jpg'] },
        { title: 'artist:mi taro333', images: ['jpg_1/mi taro333.jpg', 'jpg_2/mi taro333.jpg', 'jpg_3/mi taro333.jpg'] },
        { title: 'artist:ranf', images: ['jpg_1/ranf.jpg', 'jpg_2/ranf.jpg', 'jpg_3/ranf.jpg'] },
        { title: 'artist:zanya 000', images: ['jpg_1/zanya 000.jpg', 'jpg_2/zanya 000.jpg', 'jpg_3/zanya 000.jpg'] },
        { title: 'artist:hot vr', images: ['jpg_1/hot vr.jpg', 'jpg_2/hot vr.jpg', 'jpg_3/hot vr.jpg'] },
        { title: 'artist:yoneyama mai', images: ['jpg_1/yoneyama mai.jpg', 'jpg_2/yoneyama mai.jpg', 'jpg_3/yoneyama mai.jpg'] },
        { title: 'artist:ilya kuvshinov', images: ['jpg_1/ilya kuvshinov.jpg', 'jpg_2/ilya kuvshinov.jpg', 'jpg_3/ilya kuvshinov.jpg'] },
        { title: 'artist:stmast', images: ['jpg_1/stmast.jpg', 'jpg_2/stmast.jpg', 'jpg_3/stmast.jpg'] },
        { title: 'artist:icecake', images: ['jpg_1/icecake.jpg', 'jpg_2/icecake.jpg', 'jpg_3/icecake.jpg'] },
        { title: 'artist:yuji (fantasia)', images: ['jpg_1/yuji (fantasia).jpg', 'jpg_2/yuji (fantasia).jpg', 'jpg_3/yuji (fantasia).jpg'] },
        { title: 'artist:xerbatt', images: ['jpg_1/xerbatt.jpg', 'jpg_2/xerbatt.jpg', 'jpg_3/xerbatt.jpg'] },
        { title: 'artist:tsune (tune)', images: ['jpg_1/tsune (tune).jpg', 'jpg_2/tsune (tune).jpg', 'jpg_3/tsune (tune).jpg'] },
        { title: 'artist:aelion draws', images: ['jpg_1/aelion draws.jpg', 'jpg_2/aelion draws.jpg', 'jpg_3/aelion draws.jpg'] },
        { title: 'artist:simao (x x36131422)', images: ['jpg_1/simao (x x36131422).jpg', 'jpg_2/simao (x x36131422).jpg', 'jpg_3/simao (x x36131422).jpg'] },
        { title: 'artist:ningen mame', images: ['jpg_1/ningen mame.jpg', 'jpg_2/ningen mame.jpg', 'jpg_3/ningen mame.jpg'] },
        { title: 'artist:starshadowmagician', images: ['jpg_1/starshadowmagician.jpg', 'jpg_2/starshadowmagician.jpg', 'jpg_3/starshadowmagician.jpg'] },
        { title: 'artist:kujou karasuma', images: ['jpg_1/kujou karasuma.jpg', 'jpg_2/kujou karasuma.jpg', 'jpg_3/kujou karasuma.jpg'] },
        { title: 'artist:yamauchi (conan-comy)', images: ['jpg_1/yamauchi (conan-comy).jpg', 'jpg_2/yamauchi (conan-comy).jpg', 'jpg_3/yamauchi (conan-comy).jpg'] },
        { title: 'artist:rhine (overtonerhine)', images: ['jpg_1/rhine (overtonerhine).jpg', 'jpg_2/rhine (overtonerhine).jpg', 'jpg_3/rhine (overtonerhine).jpg'] },
        { title: 'artist:tab head', images: ['jpg_1/tab head.jpg', 'jpg_2/tab head.jpg', 'jpg_3/tab head.jpg'] },
        { title: 'artist:lance (lancelliu)', images: ['jpg_1/lance (lancelliu).jpg', 'jpg_2/lance (lancelliu).jpg', 'jpg_3/lance (lancelliu).jpg'] },
        { title: 'artist:ryuuzaki ichi', images: ['jpg_1/ryuuzaki ichi.jpg', 'jpg_2/ryuuzaki ichi.jpg', 'jpg_3/ryuuzaki ichi.jpg'] },
        { title: 'artist:matsuoka (mtok 0)', images: ['jpg_1/matsuoka (mtok 0).jpg', 'jpg_2/matsuoka (mtok 0).jpg', 'jpg_3/matsuoka (mtok 0).jpg'] },
        { title: 'artist:almualim', images: ['jpg_1/almualim.jpg', 'jpg_2/almualim.jpg', 'jpg_3/almualim.jpg'] },
        { title: 'artist:huanxiang heitu', images: ['jpg_1/huanxiang heitu.jpg', 'jpg_2/huanxiang heitu.jpg', 'jpg_3/huanxiang heitu.jpg'] },
        { title: 'artist:kasuga haruhi', images: ['jpg_1/kasuga haruhi.jpg', 'jpg_2/kasuga haruhi.jpg', 'jpg_3/kasuga haruhi.jpg'] },
        { title: 'artist:opossumachine', images: ['jpg_1/opossumachine.jpg', 'jpg_2/opossumachine.jpg', 'jpg_3/opossumachine.jpg'] },
        { title: 'artist:sy4', images: ['jpg_1/sy4.jpg', 'jpg_2/sy4.jpg', 'jpg_3/sy4.jpg'] },
        { title: 'artist:ribiadan', images: ['jpg_1/ribiadan.jpg', 'jpg_2/ribiadan.jpg', 'jpg_3/ribiadan.jpg'] },
        { title: 'artist:iwamushi', images: ['jpg_1/iwamushi.jpg', 'jpg_2/iwamushi.jpg', 'jpg_3/iwamushi.jpg'] },
        { title: 'artist:aak', images: ['jpg_1/aak.jpg', 'jpg_2/aak.jpg', 'jpg_3/aak.jpg'] },
        { title: 'artist:migolu', images: ['jpg_1/migolu.jpg', 'jpg_2/migolu.jpg', 'jpg_3/migolu.jpg'] },
        { title: 'artist:kankan33333', images: ['jpg_1/kankan33333.jpg', 'jpg_2/kankan33333.jpg', 'jpg_3/kankan33333.jpg'] },
        { title: 'artist:kuzuvine', images: ['jpg_1/kuzuvine.jpg', 'jpg_2/kuzuvine.jpg', 'jpg_3/kuzuvine.jpg'] },
        { title: 'artist:ikeuchi tanuma', images: ['jpg_1/ikeuchi tanuma.jpg', 'jpg_2/ikeuchi tanuma.jpg', 'jpg_3/ikeuchi tanuma.jpg'] },
        { title: 'artist:saaal653', images: ['jpg_1/saaal653.jpg', 'jpg_2/saaal653.jpg', 'jpg_3/saaal653.jpg'] },
        { title: 'artist:hacco mayu', images: ['jpg_1/hacco mayu.jpg', 'jpg_2/hacco mayu.jpg', 'jpg_3/hacco mayu.jpg'] },
        { title: 'artist:kakure eria', images: ['jpg_1/kakure eria.jpg', 'jpg_2/kakure eria.jpg', 'jpg_3/kakure eria.jpg'] },
        { title: 'artist:samneco', images: ['jpg_1/samneco.jpg', 'jpg_2/samneco.jpg', 'jpg_3/samneco.jpg'] },
        { title: 'artist:wanaata', images: ['jpg_1/wanaata.jpg', 'jpg_2/wanaata.jpg', 'jpg_3/wanaata.jpg'] },
        { title: 'artist:ebonyxh', images: ['jpg_1/ebonyxh.jpg', 'jpg_2/ebonyxh.jpg', 'jpg_3/ebonyxh.jpg'] },
        { title: 'artist:xinzoruo', images: ['jpg_1/xinzoruo.jpg', 'jpg_2/xinzoruo.jpg', 'jpg_3/xinzoruo.jpg'] },
        { title: 'artist:mikozin', images: ['jpg_1/mikozin.jpg', 'jpg_2/mikozin.jpg', 'jpg_3/mikozin.jpg'] },
        { title: 'artist:shion (mirudakemann)', images: ['jpg_1/shion (mirudakemann).jpg', 'jpg_2/shion (mirudakemann).jpg', 'jpg_3/shion (mirudakemann).jpg'] },
        { title: 'artist:xiangzi box', images: ['jpg_1/xiangzi box.jpg', 'jpg_2/xiangzi box.jpg', 'jpg_3/xiangzi box.jpg'] },
        { title: 'artist:feral lemma', images: ['jpg_1/feral lemma.jpg', 'jpg_2/feral lemma.jpg', 'jpg_3/feral lemma.jpg'] },
        { title: 'artist:tira 27', images: ['jpg_1/tira 27.jpg', 'jpg_2/tira 27.jpg', 'jpg_3/tira 27.jpg'] },
        { title: 'artist:chahan (fried rice0614)', images: ['jpg_1/chahan (fried rice0614).jpg', 'jpg_2/chahan (fried rice0614).jpg', 'jpg_3/chahan (fried rice0614).jpg'] },
        { title: 'artist:kame (kamepan44231)', images: ['jpg_1/kame (kamepan44231).jpg', 'jpg_2/kame (kamepan44231).jpg', 'jpg_3/kame (kamepan44231).jpg'] },
        { title: 'artist:misekai 555', images: ['jpg_1/misekai 555.jpg', 'jpg_2/misekai 555.jpg', 'jpg_3/misekai 555.jpg'] },
        { title: 'artist:iuui', images: ['jpg_1/iuui.jpg', 'jpg_2/iuui.jpg', 'jpg_3/iuui.jpg'] },
        { title: 'artist:gsusart', images: ['jpg_1/gsusart.jpg', 'jpg_2/gsusart.jpg', 'jpg_3/gsusart.jpg'] },
        { title: 'artist:nuu (nu-nyu)', images: ['jpg_1/nuu (nu-nyu).jpg', 'jpg_2/nuu (nu-nyu).jpg', 'jpg_3/nuu (nu-nyu).jpg'] },
        { title: 'artist:nephthys2356', images: ['jpg_1/nephthys2356.jpg', 'jpg_2/nephthys2356.jpg', 'jpg_3/nephthys2356.jpg'] },
        { title: 'artist:bee (deadflow)', images: ['jpg_1/bee (deadflow).jpg', 'jpg_2/bee (deadflow).jpg', 'jpg_3/bee (deadflow).jpg'] },
        { title: 'artist:ro g (oowack)', images: ['jpg_1/ro g (oowack).jpg', 'jpg_2/ro g (oowack).jpg', 'jpg_3/ro g (oowack).jpg'] },
        { title: 'artist:atte nanakusa', images: ['jpg_1/atte nanakusa.jpg', 'jpg_2/atte nanakusa.jpg', 'jpg_3/atte nanakusa.jpg'] },
        { title: 'artist:cloba', images: ['jpg_1/cloba.jpg', 'jpg_2/cloba.jpg', 'jpg_3/cloba.jpg'] },
        { title: 'artist:omurice (roza4957)', images: ['jpg_1/omurice (roza4957).jpg', 'jpg_2/omurice (roza4957).jpg', 'jpg_3/omurice (roza4957).jpg'] },
        { title: 'artist:patzzi', images: ['jpg_1/patzzi.jpg', 'jpg_2/patzzi.jpg', 'jpg_3/patzzi.jpg'] },
        { title: 'artist:j.k.', images: ['jpg_1/j.k..jpg', 'jpg_2/j.k..jpg', 'jpg_3/j.k..jpg'] },
        { title: 'artist:robo mikan', images: ['jpg_1/robo mikan.jpg', 'jpg_2/robo mikan.jpg', 'jpg_3/robo mikan.jpg'] },
        { title: 'artist:takeda hiromitsu', images: ['jpg_1/takeda hiromitsu.jpg', 'jpg_2/takeda hiromitsu.jpg', 'jpg_3/takeda hiromitsu.jpg'] },
        { title: 'artist:iwao178', images: ['jpg_1/iwao178.jpg', 'jpg_2/iwao178.jpg', 'jpg_3/iwao178.jpg'] },
        { title: 'artist:ironlily', images: ['jpg_1/ironlily.jpg', 'jpg_2/ironlily.jpg', 'jpg_3/ironlily.jpg'] },
        { title: 'artist:vanripper', images: ['jpg_1/vanripper.jpg', 'jpg_2/vanripper.jpg', 'jpg_3/vanripper.jpg'] },
        { title: 'artist:wada arco', images: ['jpg_1/wada arco.jpg', 'jpg_2/wada arco.jpg', 'jpg_3/wada arco.jpg'] },
        { title: 'artist:kuroboshi kouhaku', images: ['jpg_1/kuroboshi kouhaku.jpg', 'jpg_2/kuroboshi kouhaku.jpg', 'jpg_3/kuroboshi kouhaku.jpg'] },
        { title: 'artist:na tarapisu153', images: ['jpg_1/na tarapisu153.jpg', 'jpg_2/na tarapisu153.jpg', 'jpg_3/na tarapisu153.jpg'] },
        { title: 'artist:par0llel', images: ['jpg_1/par0llel.jpg', 'jpg_2/par0llel.jpg', 'jpg_3/par0llel.jpg'] },
        { title: 'artist:annin musou', images: ['jpg_1/annin musou.jpg', 'jpg_2/annin musou.jpg', 'jpg_3/annin musou.jpg'] },
        { title: 'artist:nozora yuzu', images: ['jpg_1/nozora yuzu.jpg', 'jpg_2/nozora yuzu.jpg', 'jpg_3/nozora yuzu.jpg'] },
        { title: 'artist:donburi (donburikazoku)', images: ['jpg_1/donburi (donburikazoku).jpg', 'jpg_2/donburi (donburikazoku).jpg', 'jpg_3/donburi (donburikazoku).jpg'] },
        { title: 'artist:kobinbin', images: ['jpg_1/kobinbin.jpg', 'jpg_2/kobinbin.jpg', 'jpg_3/kobinbin.jpg'] },
        { title: 'artist:kenatosne', images: ['jpg_1/kenatosne.jpg', 'jpg_2/kenatosne.jpg', 'jpg_3/kenatosne.jpg'] },
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