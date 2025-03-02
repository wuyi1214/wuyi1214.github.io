import re,os
str_0 = '''

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
    '''
str_2 = '''
    const tableBody = document.getElementById('table-body');
    const goPageButton = document.getElementById('go-to-page');
    const firstPageButton = document.getElementById('first-page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    // 示例数据（实际应动态获取或从服务器加载）
    const data = [
'''

str_3 = '''
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

    
});'''

def longstr(list_of_it):
    fstr = f"        {{ title: '{list_of_it[0]}', images: ['{list_of_it[1]}', '{list_of_it[2]}', '{list_of_it[3]}'] }},"
    return fstr
list_list_of_it = [['无画风原图','og/1.png','og/2.png','og/3.png']]
with open('artist_肉感.txt','r') as f:
    while True:
        st = f.readline().strip()
        if st == 'artist:_':
            continue
        if st == 'artist:':
            break
        if st == '':
            break
        path_0 = re.sub(r'artist:','',st)
        path_0 = re.sub(r':','',path_0)
        list_of_it = []
        list_of_it.append(st)
        if os.path.exists(f'table/jpg_1/{path_0}.jpg'):
            list_of_it.append(f'jpg_1/{path_0}.jpg')
        else:
            list_of_it.append('null.png')
        if os.path.exists(f'table/jpg_2/{path_0}.jpg'):
            list_of_it.append(f'jpg_2/{path_0}.jpg')
        else:
            list_of_it.append('null.png')
        if os.path.exists(f'table/jpg_3/{path_0}.jpg'):
            list_of_it.append(f'jpg_3/{path_0}.jpg')
        else:
            list_of_it.append('null.png')
        list_list_of_it.append(list_of_it)
str_1=f'    const totalRows = {len(list_list_of_it)}; // 总行数（示例数据，实际应动态获取）\n'
str_list_of_it = ''
for list_of_it in list_list_of_it:
    str_list_of_it += longstr(list_of_it=list_of_it)
    str_list_of_it += '\n'
print(str_list_of_it)
str_to = str_0 + '\n' + str_1 + '\n' + str_2 + '\n' + str_list_of_it + str_3
with open('table/script_肉感.js','w',encoding='utf-8') as f:
    f.write(str_to)