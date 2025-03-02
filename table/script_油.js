

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
    
    const totalRows = 109; // 总行数（示例数据，实际应动态获取）


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
        { title: 'artist:mitomumitomu', images: ['jpg_1/mitomumitomu.jpg', 'jpg_2/mitomumitomu.jpg', 'jpg_3/mitomumitomu.jpg'] },
        { title: 'artist:poper (arin sel)', images: ['jpg_1/poper (arin sel).jpg', 'jpg_2/poper (arin sel).jpg', 'jpg_3/poper (arin sel).jpg'] },
        { title: 'artist:boingoo', images: ['jpg_1/boingoo.jpg', 'jpg_2/boingoo.jpg', 'jpg_3/boingoo.jpg'] },
        { title: 'artist:elocca', images: ['jpg_1/elocca.jpg', 'jpg_2/elocca.jpg', 'jpg_3/elocca.jpg'] },
        { title: 'artist:nironiro', images: ['jpg_1/nironiro.jpg', 'jpg_2/nironiro.jpg', 'jpg_3/nironiro.jpg'] },
        { title: 'artist:ai gon deroga', images: ['jpg_1/ai gon deroga.jpg', 'jpg_2/ai gon deroga.jpg', 'jpg_3/ai gon deroga.jpg'] },
        { title: 'artist:kcccc', images: ['jpg_1/kcccc.jpg', 'jpg_2/kcccc.jpg', 'jpg_3/kcccc.jpg'] },
        { title: 'artist:miyashiro ryuutarou', images: ['jpg_1/miyashiro ryuutarou.jpg', 'jpg_2/miyashiro ryuutarou.jpg', 'jpg_3/miyashiro ryuutarou.jpg'] },
        { title: 'artist:c.honey', images: ['jpg_1/c.honey.jpg', 'jpg_2/c.honey.jpg', 'jpg_3/c.honey.jpg'] },
        { title: 'artist:da mao banlangen', images: ['jpg_1/da mao banlangen.jpg', 'jpg_2/da mao banlangen.jpg', 'jpg_3/da mao banlangen.jpg'] },
        { title: 'artist:secon', images: ['jpg_1/secon.jpg', 'jpg_2/secon.jpg', 'jpg_3/secon.jpg'] },
        { title: 'artist:kidmo', images: ['jpg_1/kidmo.jpg', 'jpg_2/kidmo.jpg', 'jpg_3/kidmo.jpg'] },
        { title: 'artist:mana (remana)', images: ['jpg_1/mana (remana).jpg', 'jpg_2/mana (remana).jpg', 'jpg_3/mana (remana).jpg'] },
        { title: 'artist:henreader', images: ['jpg_1/henreader.jpg', 'jpg_2/henreader.jpg', 'jpg_3/henreader.jpg'] },
        { title: 'artist:derauea', images: ['jpg_1/derauea.jpg', 'jpg_2/derauea.jpg', 'jpg_3/derauea.jpg'] },
        { title: 'artist:nekodayo22', images: ['jpg_1/nekodayo22.jpg', 'jpg_2/nekodayo22.jpg', 'jpg_3/nekodayo22.jpg'] },
        { title: 'artist:betabeet', images: ['jpg_1/betabeet.jpg', 'jpg_2/betabeet.jpg', 'jpg_3/betabeet.jpg'] },
        { title: 'artist:jagoo', images: ['jpg_1/jagoo.jpg', 'jpg_2/jagoo.jpg', 'jpg_3/jagoo.jpg'] },
        { title: 'artist:edmun6969', images: ['jpg_1/edmun6969.jpg', 'jpg_2/edmun6969.jpg', 'jpg_3/edmun6969.jpg'] },
        { title: 'artist:jasony', images: ['jpg_1/jasony.jpg', 'jpg_2/jasony.jpg', 'jpg_3/jasony.jpg'] },
        { title: 'artist:zaphn', images: ['jpg_1/zaphn.jpg', 'jpg_2/zaphn.jpg', 'jpg_3/zaphn.jpg'] },
        { title: 'artist:mimonel', images: ['jpg_1/mimonel.jpg', 'jpg_2/mimonel.jpg', 'jpg_3/mimonel.jpg'] },
        { title: 'artist:kazane-wind', images: ['jpg_1/kazane-wind.jpg', 'jpg_2/kazane-wind.jpg', 'jpg_3/kazane-wind.jpg'] },
        { title: 'artist:lichiko', images: ['jpg_1/lichiko.jpg', 'jpg_2/lichiko.jpg', 'jpg_3/lichiko.jpg'] },
        { title: 'artist:tsuda nanafushi', images: ['jpg_1/tsuda nanafushi.jpg', 'jpg_2/tsuda nanafushi.jpg', 'jpg_3/tsuda nanafushi.jpg'] },
        { title: 'artist:imizu (nitro unknown)', images: ['jpg_1/imizu (nitro unknown).jpg', 'jpg_2/imizu (nitro unknown).jpg', 'jpg_3/imizu (nitro unknown).jpg'] },
        { title: 'artist:ekrea jan', images: ['jpg_1/ekrea jan.jpg', 'jpg_2/ekrea jan.jpg', 'jpg_3/ekrea jan.jpg'] },
        { title: 'artist:tokkyu', images: ['jpg_1/tokkyu.jpg', 'jpg_2/tokkyu.jpg', 'jpg_3/tokkyu.jpg'] },
        { title: 'artist:onedoo', images: ['jpg_1/onedoo.jpg', 'jpg_2/onedoo.jpg', 'jpg_3/onedoo.jpg'] },
        { title: 'artist:piyo (pixiv 2308057)', images: ['jpg_1/piyo (pixiv 2308057).jpg', 'jpg_2/piyo (pixiv 2308057).jpg', 'jpg_3/piyo (pixiv 2308057).jpg'] },
        { title: 'artist:bikkii', images: ['jpg_1/bikkii.jpg', 'jpg_2/bikkii.jpg', 'jpg_3/bikkii.jpg'] },
        { title: 'artist:momisan', images: ['jpg_1/momisan.jpg', 'jpg_2/momisan.jpg', 'jpg_3/momisan.jpg'] },
        { title: 'artist:subob (subobdesu)', images: ['jpg_1/subob (subobdesu).jpg', 'jpg_2/subob (subobdesu).jpg', 'jpg_3/subob (subobdesu).jpg'] },
        { title: 'artist:meion', images: ['jpg_1/meion.jpg', 'jpg_2/meion.jpg', 'jpg_3/meion.jpg'] },
        { title: 'artist:mamuru', images: ['jpg_1/mamuru.jpg', 'jpg_2/mamuru.jpg', 'jpg_3/mamuru.jpg'] },
        { title: 'artist:kim hyung tae', images: ['jpg_1/kim hyung tae.jpg', 'jpg_2/kim hyung tae.jpg', 'jpg_3/kim hyung tae.jpg'] },
        { title: 'artist:niur', images: ['jpg_1/niur.jpg', 'jpg_2/niur.jpg', 'jpg_3/niur.jpg'] },
        { title: 'artist:5t (5t 000)', images: ['jpg_1/5t (5t 000).jpg', 'jpg_2/5t (5t 000).jpg', 'jpg_3/5t (5t 000).jpg'] },
        { title: 'artist:stmast', images: ['jpg_1/stmast.jpg', 'jpg_2/stmast.jpg', 'jpg_3/stmast.jpg'] },
        { title: 'artist:kitsune-neko', images: ['jpg_1/kitsune-neko.jpg', 'jpg_2/kitsune-neko.jpg', 'jpg_3/kitsune-neko.jpg'] },
        { title: 'artist:enma (enmanuelart)', images: ['jpg_1/enma (enmanuelart).jpg', 'jpg_2/enma (enmanuelart).jpg', 'jpg_3/enma (enmanuelart).jpg'] },
        { title: 'artist:lalazyt', images: ['jpg_1/lalazyt.jpg', 'jpg_2/lalazyt.jpg', 'jpg_3/lalazyt.jpg'] },
        { title: 'artist:isshiki (ffmania7)', images: ['jpg_1/isshiki (ffmania7).jpg', 'jpg_2/isshiki (ffmania7).jpg', 'jpg_3/isshiki (ffmania7).jpg'] },
        { title: 'artist:aoi sakura (seak5545)', images: ['jpg_1/aoi sakura (seak5545).jpg', 'jpg_2/aoi sakura (seak5545).jpg', 'jpg_3/aoi sakura (seak5545).jpg'] },
        { title: 'artist:gomashio ponz', images: ['jpg_1/gomashio ponz.jpg', 'jpg_2/gomashio ponz.jpg', 'jpg_3/gomashio ponz.jpg'] },
        { title: 'artist:mentha', images: ['jpg_1/mentha.jpg', 'jpg_2/mentha.jpg', 'jpg_3/mentha.jpg'] },
        { title: 'artist:drums (artist)', images: ['jpg_1/drums (artist).jpg', 'jpg_2/drums (artist).jpg', 'jpg_3/drums (artist).jpg'] },
        { title: 'artist:fellatrix', images: ['jpg_1/fellatrix.jpg', 'jpg_2/fellatrix.jpg', 'jpg_3/fellatrix.jpg'] },
        { title: 'artist:gonster', images: ['jpg_1/gonster.jpg', 'jpg_2/gonster.jpg', 'jpg_3/gonster.jpg'] },
        { title: 'artist:eu03', images: ['jpg_1/eu03.jpg', 'jpg_2/eu03.jpg', 'jpg_3/eu03.jpg'] },
        { title: 'artist:kangshi', images: ['jpg_1/kangshi.jpg', 'jpg_2/kangshi.jpg', 'jpg_3/kangshi.jpg'] },
        { title: 'artist:sayori (neko works)', images: ['jpg_1/sayori (neko works).jpg', 'jpg_2/sayori (neko works).jpg', 'jpg_3/sayori (neko works).jpg'] },
        { title: 'artist:suujiniku', images: ['jpg_1/suujiniku.jpg', 'jpg_2/suujiniku.jpg', 'jpg_3/suujiniku.jpg'] },
        { title: 'artist:qiandaiyiyu', images: ['jpg_1/qiandaiyiyu.jpg', 'jpg_2/qiandaiyiyu.jpg', 'jpg_3/qiandaiyiyu.jpg'] },
        { title: 'artist:himonoata', images: ['jpg_1/himonoata.jpg', 'jpg_2/himonoata.jpg', 'jpg_3/himonoata.jpg'] },
        { title: 'artist:lilac (k32420276)', images: ['jpg_1/lilac (k32420276).jpg', 'jpg_2/lilac (k32420276).jpg', 'jpg_3/lilac (k32420276).jpg'] },
        { title: 'artist:kase daiki', images: ['jpg_1/kase daiki.jpg', 'jpg_2/kase daiki.jpg', 'jpg_3/kase daiki.jpg'] },
        { title: 'artist:tandohark', images: ['jpg_1/tandohark.jpg', 'jpg_2/tandohark.jpg', 'jpg_3/tandohark.jpg'] },
        { title: 'artist:houkisei', images: ['jpg_1/houkisei.jpg', 'jpg_2/houkisei.jpg', 'jpg_3/houkisei.jpg'] },
        { title: 'artist:amasora taichi', images: ['jpg_1/amasora taichi.jpg', 'jpg_2/amasora taichi.jpg', 'jpg_3/amasora taichi.jpg'] },
        { title: 'artist:q azieru', images: ['jpg_1/q azieru.jpg', 'jpg_2/q azieru.jpg', 'jpg_3/q azieru.jpg'] },
        { title: 'artist:militia minpei', images: ['jpg_1/militia minpei.jpg', 'jpg_2/militia minpei.jpg', 'jpg_3/militia minpei.jpg'] },
        { title: 'artist:ibenz009', images: ['jpg_1/ibenz009.jpg', 'jpg_2/ibenz009.jpg', 'jpg_3/ibenz009.jpg'] },
        { title: 'artist:rindou (radical dream)', images: ['jpg_1/rindou (radical dream).jpg', 'jpg_2/rindou (radical dream).jpg', 'jpg_3/rindou (radical dream).jpg'] },
        { title: 'artist:iro ame (amewaagada)', images: ['jpg_1/iro ame (amewaagada).jpg', 'jpg_2/iro ame (amewaagada).jpg', 'jpg_3/iro ame (amewaagada).jpg'] },
        { title: 'artist:musouzuki', images: ['jpg_1/musouzuki.jpg', 'jpg_2/musouzuki.jpg', 'jpg_3/musouzuki.jpg'] },
        { title: 'artist:ctrlz77', images: ['jpg_1/ctrlz77.jpg', 'jpg_2/ctrlz77.jpg', 'jpg_3/ctrlz77.jpg'] },
        { title: 'artist:osiimi', images: ['jpg_1/osiimi.jpg', 'jpg_2/osiimi.jpg', 'jpg_3/osiimi.jpg'] },
        { title: 'artist:shion (mirudakemann)', images: ['jpg_1/shion (mirudakemann).jpg', 'jpg_2/shion (mirudakemann).jpg', 'jpg_3/shion (mirudakemann).jpg'] },
        { title: 'artist:feral lemma', images: ['jpg_1/feral lemma.jpg', 'jpg_2/feral lemma.jpg', 'jpg_3/feral lemma.jpg'] },
        { title: 'artist:kawacy', images: ['jpg_1/kawacy.jpg', 'jpg_2/kawacy.jpg', 'jpg_3/kawacy.jpg'] },
        { title: 'artist:dk.senie', images: ['jpg_1/dk.senie.jpg', 'jpg_2/dk.senie.jpg', 'jpg_3/dk.senie.jpg'] },
        { title: 'artist:free style (yohan1754)', images: ['jpg_1/free style (yohan1754).jpg', 'jpg_2/free style (yohan1754).jpg', 'jpg_3/free style (yohan1754).jpg'] },
        { title: 'artist:nephlite', images: ['jpg_1/nephlite.jpg', 'jpg_2/nephlite.jpg', 'jpg_3/nephlite.jpg'] },
        { title: 'artist:aki99', images: ['jpg_1/aki99.jpg', 'jpg_2/aki99.jpg', 'jpg_3/aki99.jpg'] },
        { title: 'artist:norza', images: ['jpg_1/norza.jpg', 'jpg_2/norza.jpg', 'jpg_3/norza.jpg'] },
        { title: 'artist:curss', images: ['jpg_1/curss.jpg', 'jpg_2/curss.jpg', 'jpg_3/curss.jpg'] },
        { title: 'artist:rourou (been)', images: ['jpg_1/rourou (been).jpg', 'jpg_2/rourou (been).jpg', 'jpg_3/rourou (been).jpg'] },
        { title: 'artist:muroku (aimichiyo0526)', images: ['jpg_1/muroku (aimichiyo0526).jpg', 'jpg_2/muroku (aimichiyo0526).jpg', 'jpg_3/muroku (aimichiyo0526).jpg'] },
        { title: 'artist:milkychu', images: ['jpg_1/milkychu.jpg', 'jpg_2/milkychu.jpg', 'jpg_3/milkychu.jpg'] },
        { title: 'artist:fuya (tempupupu)', images: ['jpg_1/fuya (tempupupu).jpg', 'jpg_2/fuya (tempupupu).jpg', 'jpg_3/fuya (tempupupu).jpg'] },
        { title: 'artist:torriet', images: ['jpg_1/torriet.jpg', 'jpg_2/torriet.jpg', 'jpg_3/torriet.jpg'] },
        { title: 'artist:yago8 pp3', images: ['jpg_1/yago8 pp3.jpg', 'jpg_2/yago8 pp3.jpg', 'jpg_3/yago8 pp3.jpg'] },
        { title: 'artist:ohigetan', images: ['jpg_1/ohigetan.jpg', 'jpg_2/ohigetan.jpg', 'jpg_3/ohigetan.jpg'] },
        { title: 'artist:tsuji santa', images: ['jpg_1/tsuji santa.jpg', 'jpg_2/tsuji santa.jpg', 'jpg_3/tsuji santa.jpg'] },
        { title: 'artist:kilye kairi', images: ['jpg_1/kilye kairi.jpg', 'jpg_2/kilye kairi.jpg', 'jpg_3/kilye kairi.jpg'] },
        { title: 'artist:monikano', images: ['jpg_1/monikano.jpg', 'jpg_2/monikano.jpg', 'jpg_3/monikano.jpg'] },
        { title: 'artist:blushyspicy', images: ['jpg_1/blushyspicy.jpg', 'jpg_2/blushyspicy.jpg', 'jpg_3/blushyspicy.jpg'] },
        { title: 'artist:dema hmw', images: ['jpg_1/dema hmw.jpg', 'jpg_2/dema hmw.jpg', 'jpg_3/dema hmw.jpg'] },
        { title: 'artist:rkrk12', images: ['jpg_1/rkrk12.jpg', 'jpg_2/rkrk12.jpg', 'jpg_3/rkrk12.jpg'] },
        { title: 'artist:kaede (yumesaki kaede)', images: ['jpg_1/kaede (yumesaki kaede).jpg', 'jpg_2/kaede (yumesaki kaede).jpg', 'jpg_3/kaede (yumesaki kaede).jpg'] },
        { title: 'artist:freeze-ex', images: ['jpg_1/freeze-ex.jpg', 'jpg_2/freeze-ex.jpg', 'jpg_3/freeze-ex.jpg'] },
        { title: 'artist:erica (naze1940)', images: ['jpg_1/erica (naze1940).jpg', 'jpg_2/erica (naze1940).jpg', 'jpg_3/erica (naze1940).jpg'] },
        { title: 'artist:bbbs', images: ['jpg_1/bbbs.jpg', 'jpg_2/bbbs.jpg', 'jpg_3/bbbs.jpg'] },
        { title: 'artist:elleciel.eud', images: ['jpg_1/elleciel.eud.jpg', 'jpg_2/elleciel.eud.jpg', 'jpg_3/elleciel.eud.jpg'] },
        { title: 'artist:moco (moco 28)', images: ['jpg_1/moco (moco 28).jpg', 'jpg_2/moco (moco 28).jpg', 'jpg_3/moco (moco 28).jpg'] },
        { title: 'artist:gwan-e', images: ['jpg_1/gwan-e.jpg', 'jpg_2/gwan-e.jpg', 'jpg_3/gwan-e.jpg'] },
        { title: 'artist:rat huang', images: ['jpg_1/rat huang.jpg', 'jpg_2/rat huang.jpg', 'jpg_3/rat huang.jpg'] },
        { title: 'artist:bwcloud', images: ['jpg_1/bwcloud.jpg', 'jpg_2/bwcloud.jpg', 'jpg_3/bwcloud.jpg'] },
        { title: 'artist:maruko tooto', images: ['jpg_1/maruko tooto.jpg', 'jpg_2/maruko tooto.jpg', 'jpg_3/maruko tooto.jpg'] },
        { title: 'artist:shuiruoqing', images: ['jpg_1/shuiruoqing.jpg', 'jpg_2/shuiruoqing.jpg', 'jpg_3/shuiruoqing.jpg'] },
        { title: 'artist:kiramarukou', images: ['jpg_1/kiramarukou.jpg', 'jpg_2/kiramarukou.jpg', 'jpg_3/kiramarukou.jpg'] },
        { title: 'artist:weisuoxin', images: ['jpg_1/weisuoxin.jpg', 'jpg_2/weisuoxin.jpg', 'jpg_3/weisuoxin.jpg'] },
        { title: 'artist:reiku09', images: ['jpg_1/reiku09.jpg', 'jpg_2/reiku09.jpg', 'jpg_3/reiku09.jpg'] },
        { title: 'artist:turbulence', images: ['jpg_1/turbulence.jpg', 'jpg_2/turbulence.jpg', 'jpg_3/turbulence.jpg'] },
        { title: 'artist:whispering for nothing', images: ['jpg_1/whispering for nothing.jpg', 'jpg_2/whispering for nothing.jpg', 'jpg_3/whispering for nothing.jpg'] },
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