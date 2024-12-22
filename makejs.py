import re,os

str_0='''
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10; // 每页显示的行数
    let currentPage = 1; // 当前页码'''
str_2='''    const tableBody = document.getElementById('table-body');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    // 示例数据（实际应动态获取或从服务器加载）
    const data = ['''
str_3='''        // ...（30个对象的数组，每个对象包含标题和5个图片URL）
    ];

    // 渲染表格数据
    function renderTable(page) {
        tableBody.innerHTML = ''; // 清空表格体
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        for (let i = startIndex; i < endIndex && i < totalRows; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data[i].title}</td>
                <td><img src="${data[i].images[0]}" alt="图片1"></td>
                <td><img src="${data[i].images[1]}" alt="图片2"></td>
                <td><img src="${data[i].images[2]}" alt="图片3"></td>
                <td><img src="${data[i].images[3]}" alt="图片4"></td>
                <td><img src="${data[i].images[4]}" alt="图片5"></td>
            `;
            tableBody.appendChild(row);
        }
        updatePaginationControls();
    }

    // 更新分页控件的状态
    function updatePaginationControls() {
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage * rowsPerPage >= totalRows;
        pageInfo.textContent = `第 ${currentPage} 页 / 共 ${Math.ceil(totalRows / rowsPerPage)} 页`;
    }

    // 初始化表格和分页控件
    renderTable(currentPage);

    // 分页按钮点击事件处理
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
});

// 示例数据（应在实际应用中动态获取）
// 请注意，这里的数据格式应与JavaScript中的处理逻辑相匹配
// 例如：
// const data = [
//     { title: '标题1', images: ['image1-1.jpg', 'image1-2.jpg', 'image1-3.jpg', 'image1-4.jpg', 'image1-5.jpg'] },
//     { title: '标题2', images: ['image2-1.jpg', 'image2-2.jpg', 'image2-3.jpg', 'image2-4.jpg', 'image2-5.jpg'] },
//     // ...（更多数据对象）
// ];
'''
def longstr(list_of_it):
    fstr = f"        {{ title: '{list_of_it[0]}', images: ['{list_of_it[1]}', '{list_of_it[2]}', '{list_of_it[3]}', '{list_of_it[4]}', '{list_of_it[5]}'] }},"
    return fstr
list_list_of_it = []
with open('artist.txt','r') as f:
    while True:
        st = f.readline().strip()
        if st == 'artist:':
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
        if os.path.exists(f'table/jpg_4/{path_0}.jpg'):
            list_of_it.append(f'jpg_4/{path_0}.jpg')
        else:
            list_of_it.append('null.png')
        if os.path.exists(f'table/jpg_5/{path_0}.jpg'):
            list_of_it.append(f'jpg_5/{path_0}.jpg')
        else:
            list_of_it.append('null.png')
        list_list_of_it.append(list_of_it)
str_1=f'    const totalRows = {len(list_list_of_it)}; // 总行数（示例数据，实际应动态获取）\n'
str_list_of_it = ''
for list_of_it in list_list_of_it:
    str_list_of_it += longstr(list_of_it=list_of_it)
    str_list_of_it += '\n'
str_to = str_0 + '\n' + str_1 + '\n' + str_2 + '\n' + str_list_of_it + str_3
with open('table/script.js','w',encoding='utf-8') as f:
    f.write(str_to)