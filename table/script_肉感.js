

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
    
    const totalRows = 94; // 总行数（示例数据，实际应动态获取）


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
        { title: 'artist:chomikuplus', images: ['jpg_1/chomikuplus.jpg', 'jpg_2/chomikuplus.jpg', 'jpg_3/chomikuplus.jpg'] },
        { title: 'artist:dikko', images: ['jpg_1/dikko.jpg', 'jpg_2/dikko.jpg', 'jpg_3/dikko.jpg'] },
        { title: 'artist:agawa ryou', images: ['jpg_1/agawa ryou.jpg', 'jpg_2/agawa ryou.jpg', 'jpg_3/agawa ryou.jpg'] },
        { title: 'artist:kunaboto', images: ['jpg_1/kunaboto.jpg', 'jpg_2/kunaboto.jpg', 'jpg_3/kunaboto.jpg'] },
        { title: 'artist:siu (siu0207)', images: ['jpg_1/siu (siu0207).jpg', 'jpg_2/siu (siu0207).jpg', 'jpg_3/siu (siu0207).jpg'] },
        { title: 'artist:doyoon 7', images: ['jpg_1/doyoon 7.jpg', 'jpg_2/doyoon 7.jpg', 'jpg_3/doyoon 7.jpg'] },
        { title: 'artist:ebifurya', images: ['jpg_1/ebifurya.jpg', 'jpg_2/ebifurya.jpg', 'jpg_3/ebifurya.jpg'] },
        { title: 'artist:miyashiro ryuutarou', images: ['jpg_1/miyashiro ryuutarou.jpg', 'jpg_2/miyashiro ryuutarou.jpg', 'jpg_3/miyashiro ryuutarou.jpg'] },
        { title: 'artist:torisan', images: ['jpg_1/torisan.jpg', 'jpg_2/torisan.jpg', 'jpg_3/torisan.jpg'] },
        { title: 'artist:dishwasher1910', images: ['jpg_1/dishwasher1910.jpg', 'jpg_2/dishwasher1910.jpg', 'jpg_3/dishwasher1910.jpg'] },
        { title: 'artist:kidmo', images: ['jpg_1/kidmo.jpg', 'jpg_2/kidmo.jpg', 'jpg_3/kidmo.jpg'] },
        { title: 'artist:as109', images: ['jpg_1/as109.jpg', 'jpg_2/as109.jpg', 'jpg_3/as109.jpg'] },
        { title: 'artist:nekodayo22', images: ['jpg_1/nekodayo22.jpg', 'jpg_2/nekodayo22.jpg', 'jpg_3/nekodayo22.jpg'] },
        { title: 'artist:jagoo', images: ['jpg_1/jagoo.jpg', 'jpg_2/jagoo.jpg', 'jpg_3/jagoo.jpg'] },
        { title: 'artist:ogre (illustogre)', images: ['jpg_1/ogre (illustogre).jpg', 'jpg_2/ogre (illustogre).jpg', 'jpg_3/ogre (illustogre).jpg'] },
        { title: 'artist:abubu', images: ['jpg_1/abubu.jpg', 'jpg_2/abubu.jpg', 'jpg_3/abubu.jpg'] },
        { title: 'artist:boris (noborhys)', images: ['jpg_1/boris (noborhys).jpg', 'jpg_2/boris (noborhys).jpg', 'jpg_3/boris (noborhys).jpg'] },
        { title: 'artist:yuuji (and)', images: ['jpg_1/yuuji (and).jpg', 'jpg_2/yuuji (and).jpg', 'jpg_3/yuuji (and).jpg'] },
        { title: 'artist:phantom ix row', images: ['jpg_1/phantom ix row.jpg', 'jpg_2/phantom ix row.jpg', 'jpg_3/phantom ix row.jpg'] },
        { title: 'artist:aleriia v', images: ['jpg_1/aleriia v.jpg', 'jpg_2/aleriia v.jpg', 'jpg_3/aleriia v.jpg'] },
        { title: 'artist:misaka 12003-gou', images: ['jpg_1/misaka 12003-gou.jpg', 'jpg_2/misaka 12003-gou.jpg', 'jpg_3/misaka 12003-gou.jpg'] },
        { title: 'artist:asakuraf', images: ['jpg_1/asakuraf.jpg', 'jpg_2/asakuraf.jpg', 'jpg_3/asakuraf.jpg'] },
        { title: 'artist:melon22', images: ['jpg_1/melon22.jpg', 'jpg_2/melon22.jpg', 'jpg_3/melon22.jpg'] },
        { title: 'artist:amania orz', images: ['jpg_1/amania orz.jpg', 'jpg_2/amania orz.jpg', 'jpg_3/amania orz.jpg'] },
        { title: 'artist:meion', images: ['jpg_1/meion.jpg', 'jpg_2/meion.jpg', 'jpg_3/meion.jpg'] },
        { title: 'artist:nababa', images: ['jpg_1/nababa.jpg', 'jpg_2/nababa.jpg', 'jpg_3/nababa.jpg'] },
        { title: 'artist:kim hyung tae', images: ['jpg_1/kim hyung tae.jpg', 'jpg_2/kim hyung tae.jpg', 'jpg_3/kim hyung tae.jpg'] },
        { title: 'artist:5t (5t 000)', images: ['jpg_1/5t (5t 000).jpg', 'jpg_2/5t (5t 000).jpg', 'jpg_3/5t (5t 000).jpg'] },
        { title: 'artist:maruko tooto', images: ['jpg_1/maruko tooto.jpg', 'jpg_2/maruko tooto.jpg', 'jpg_3/maruko tooto.jpg'] },
        { title: 'artist:isshiki (ffmania7)', images: ['jpg_1/isshiki (ffmania7).jpg', 'jpg_2/isshiki (ffmania7).jpg', 'jpg_3/isshiki (ffmania7).jpg'] },
        { title: 'artist:fellatrix', images: ['jpg_1/fellatrix.jpg', 'jpg_2/fellatrix.jpg', 'jpg_3/fellatrix.jpg'] },
        { title: 'artist:gonster', images: ['jpg_1/gonster.jpg', 'jpg_2/gonster.jpg', 'jpg_3/gonster.jpg'] },
        { title: 'artist:eu03', images: ['jpg_1/eu03.jpg', 'jpg_2/eu03.jpg', 'jpg_3/eu03.jpg'] },
        { title: 'artist:shiroshisu', images: ['jpg_1/shiroshisu.jpg', 'jpg_2/shiroshisu.jpg', 'jpg_3/shiroshisu.jpg'] },
        { title: 'artist:dawalixi', images: ['jpg_1/dawalixi.jpg', 'jpg_2/dawalixi.jpg', 'jpg_3/dawalixi.jpg'] },
        { title: 'artist:fishine', images: ['jpg_1/fishine.jpg', 'jpg_2/fishine.jpg', 'jpg_3/fishine.jpg'] },
        { title: 'artist:almualim', images: ['jpg_1/almualim.jpg', 'jpg_2/almualim.jpg', 'jpg_3/almualim.jpg'] },
        { title: 'artist:rhasta', images: ['jpg_1/rhasta.jpg', 'jpg_2/rhasta.jpg', 'jpg_3/rhasta.jpg'] },
        { title: 'artist:noriko (ni noriko)', images: ['jpg_1/noriko (ni noriko).jpg', 'jpg_2/noriko (ni noriko).jpg', 'jpg_3/noriko (ni noriko).jpg'] },
        { title: 'artist:pija (pianiishimo)', images: ['jpg_1/pija (pianiishimo).jpg', 'jpg_2/pija (pianiishimo).jpg', 'jpg_3/pija (pianiishimo).jpg'] },
        { title: 'artist:kawai (purplrpouni)', images: ['jpg_1/kawai (purplrpouni).jpg', 'jpg_2/kawai (purplrpouni).jpg', 'jpg_3/kawai (purplrpouni).jpg'] },
        { title: 'artist:usashiro mani', images: ['jpg_1/usashiro mani.jpg', 'jpg_2/usashiro mani.jpg', 'jpg_3/usashiro mani.jpg'] },
        { title: 'artist:ruriri', images: ['jpg_1/ruriri.jpg', 'jpg_2/ruriri.jpg', 'jpg_3/ruriri.jpg'] },
        { title: 'artist:qys3', images: ['jpg_1/qys3.jpg', 'jpg_2/qys3.jpg', 'jpg_3/qys3.jpg'] },
        { title: 'artist:militia minpei', images: ['jpg_1/militia minpei.jpg', 'jpg_2/militia minpei.jpg', 'jpg_3/militia minpei.jpg'] },
        { title: 'artist:saaal653', images: ['jpg_1/saaal653.jpg', 'jpg_2/saaal653.jpg', 'jpg_3/saaal653.jpg'] },
        { title: 'artist:iro ame (amewaagada)', images: ['jpg_1/iro ame (amewaagada).jpg', 'jpg_2/iro ame (amewaagada).jpg', 'jpg_3/iro ame (amewaagada).jpg'] },
        { title: 'artist:caisan', images: ['jpg_1/caisan.jpg', 'jpg_2/caisan.jpg', 'jpg_3/caisan.jpg'] },
        { title: 'artist:wakamesan', images: ['jpg_1/wakamesan.jpg', 'jpg_2/wakamesan.jpg', 'jpg_3/wakamesan.jpg'] },
        { title: 'artist:ctrlz77', images: ['jpg_1/ctrlz77.jpg', 'jpg_2/ctrlz77.jpg', 'jpg_3/ctrlz77.jpg'] },
        { title: 'artist:ebonyxh', images: ['jpg_1/ebonyxh.jpg', 'jpg_2/ebonyxh.jpg', 'jpg_3/ebonyxh.jpg'] },
        { title: 'artist:taesi', images: ['jpg_1/taesi.jpg', 'jpg_2/taesi.jpg', 'jpg_3/taesi.jpg'] },
        { title: 'artist:aster crowley', images: ['jpg_1/aster crowley.jpg', 'jpg_2/aster crowley.jpg', 'jpg_3/aster crowley.jpg'] },
        { title: 'artist:naga u', images: ['jpg_1/naga u.jpg', 'jpg_2/naga u.jpg', 'jpg_3/naga u.jpg'] },
        { title: 'artist:yiduan zhu', images: ['jpg_1/yiduan zhu.jpg', 'jpg_2/yiduan zhu.jpg', 'jpg_3/yiduan zhu.jpg'] },
        { title: 'artist:murata range', images: ['jpg_1/murata range.jpg', 'jpg_2/murata range.jpg', 'jpg_3/murata range.jpg'] },
        { title: 'artist:kawacy', images: ['jpg_1/kawacy.jpg', 'jpg_2/kawacy.jpg', 'jpg_3/kawacy.jpg'] },
        { title: 'artist:chahan (fried rice0614)', images: ['jpg_1/chahan (fried rice0614).jpg', 'jpg_2/chahan (fried rice0614).jpg', 'jpg_3/chahan (fried rice0614).jpg'] },
        { title: 'artist:dk.senie', images: ['jpg_1/dk.senie.jpg', 'jpg_2/dk.senie.jpg', 'jpg_3/dk.senie.jpg'] },
        { title: 'artist:free style (yohan1754)', images: ['jpg_1/free style (yohan1754).jpg', 'jpg_2/free style (yohan1754).jpg', 'jpg_3/free style (yohan1754).jpg'] },
        { title: 'artist:nephlite', images: ['jpg_1/nephlite.jpg', 'jpg_2/nephlite.jpg', 'jpg_3/nephlite.jpg'] },
        { title: 'artist:jeneral', images: ['jpg_1/jeneral.jpg', 'jpg_2/jeneral.jpg', 'jpg_3/jeneral.jpg'] },
        { title: 'artist:c.cu', images: ['jpg_1/c.cu.jpg', 'jpg_2/c.cu.jpg', 'jpg_3/c.cu.jpg'] },
        { title: 'artist:aki99', images: ['jpg_1/aki99.jpg', 'jpg_2/aki99.jpg', 'jpg_3/aki99.jpg'] },
        { title: 'artist:ginklaga', images: ['jpg_1/ginklaga.jpg', 'jpg_2/ginklaga.jpg', 'jpg_3/ginklaga.jpg'] },
        { title: 'artist:akizero1510', images: ['jpg_1/akizero1510.jpg', 'jpg_2/akizero1510.jpg', 'jpg_3/akizero1510.jpg'] },
        { title: 'artist:yunsang', images: ['jpg_1/yunsang.jpg', 'jpg_2/yunsang.jpg', 'jpg_3/yunsang.jpg'] },
        { title: 'artist:muroku (aimichiyo0526)', images: ['jpg_1/muroku (aimichiyo0526).jpg', 'jpg_2/muroku (aimichiyo0526).jpg', 'jpg_3/muroku (aimichiyo0526).jpg'] },
        { title: 'artist:milkychu', images: ['jpg_1/milkychu.jpg', 'jpg_2/milkychu.jpg', 'jpg_3/milkychu.jpg'] },
        { title: 'artist:atahuta', images: ['jpg_1/atahuta.jpg', 'jpg_2/atahuta.jpg', 'jpg_3/atahuta.jpg'] },
        { title: 'artist:rustle', images: ['jpg_1/rustle.jpg', 'jpg_2/rustle.jpg', 'jpg_3/rustle.jpg'] },
        { title: 'artist:haguhagu (rinjuu circus)', images: ['jpg_1/haguhagu (rinjuu circus).jpg', 'jpg_2/haguhagu (rinjuu circus).jpg', 'jpg_3/haguhagu (rinjuu circus).jpg'] },
        { title: 'artist:ohigetan', images: ['jpg_1/ohigetan.jpg', 'jpg_2/ohigetan.jpg', 'jpg_3/ohigetan.jpg'] },
        { title: 'artist:jonpei', images: ['jpg_1/jonpei.jpg', 'jpg_2/jonpei.jpg', 'jpg_3/jonpei.jpg'] },
        { title: 'artist:tsuji santa', images: ['jpg_1/tsuji santa.jpg', 'jpg_2/tsuji santa.jpg', 'jpg_3/tsuji santa.jpg'] },
        { title: 'artist:j.k.', images: ['jpg_1/j.k..jpg', 'jpg_2/j.k..jpg', 'jpg_3/j.k..jpg'] },
        { title: 'artist:sanagi torajirou', images: ['jpg_1/sanagi torajirou.jpg', 'jpg_2/sanagi torajirou.jpg', 'jpg_3/sanagi torajirou.jpg'] },
        { title: 'artist:rkrk12', images: ['jpg_1/rkrk12.jpg', 'jpg_2/rkrk12.jpg', 'jpg_3/rkrk12.jpg'] },
        { title: 'artist:kaede (yumesaki kaede)', images: ['jpg_1/kaede (yumesaki kaede).jpg', 'jpg_2/kaede (yumesaki kaede).jpg', 'jpg_3/kaede (yumesaki kaede).jpg'] },
        { title: 'artist:freeze-ex', images: ['jpg_1/freeze-ex.jpg', 'jpg_2/freeze-ex.jpg', 'jpg_3/freeze-ex.jpg'] },
        { title: 'artist:erica (naze1940)', images: ['jpg_1/erica (naze1940).jpg', 'jpg_2/erica (naze1940).jpg', 'jpg_3/erica (naze1940).jpg'] },
        { title: 'artist:mako (makoda)', images: ['jpg_1/mako (makoda).jpg', 'jpg_2/mako (makoda).jpg', 'jpg_3/mako (makoda).jpg'] },
        { title: 'artist:bbbs', images: ['jpg_1/bbbs.jpg', 'jpg_2/bbbs.jpg', 'jpg_3/bbbs.jpg'] },
        { title: 'artist:elleciel.eud', images: ['jpg_1/elleciel.eud.jpg', 'jpg_2/elleciel.eud.jpg', 'jpg_3/elleciel.eud.jpg'] },
        { title: 'artist:speedl00ver', images: ['jpg_1/speedl00ver.jpg', 'jpg_2/speedl00ver.jpg', 'jpg_3/speedl00ver.jpg'] },
        { title: 'artist:rat huang', images: ['jpg_1/rat huang.jpg', 'jpg_2/rat huang.jpg', 'jpg_3/rat huang.jpg'] },
        { title: 'artist:teddypocky', images: ['jpg_1/teddypocky.jpg', 'jpg_2/teddypocky.jpg', 'jpg_3/teddypocky.jpg'] },
        { title: 'artist:shuiruoqing', images: ['jpg_1/shuiruoqing.jpg', 'jpg_2/shuiruoqing.jpg', 'jpg_3/shuiruoqing.jpg'] },
        { title: 'artist:liang xing', images: ['jpg_1/liang xing.jpg', 'jpg_2/liang xing.jpg', 'jpg_3/liang xing.jpg'] },
        { title: 'artist:neocoill', images: ['jpg_1/neocoill.jpg', 'jpg_2/neocoill.jpg', 'jpg_3/neocoill.jpg'] },
        { title: 'artist:kenatosne', images: ['jpg_1/kenatosne.jpg', 'jpg_2/kenatosne.jpg', 'jpg_3/kenatosne.jpg'] },
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