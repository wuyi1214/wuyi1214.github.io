import re,os


def longstr(list_of_it):
    fstr = f"        {{ title: '{list_of_it[0]}', images: ['{list_of_it[1]}', '{list_of_it[2]}', '{list_of_it[3]}', '{list_of_it[4]}', '{list_of_it[5]}'] }},"
    return fstr
list_list_of_it = [['无画风原图','og/1.png','og/2.png','og/3.png','og/4.png','og/5.png']]
with open('artist.txt','r') as f:
    while True:
        st = f.readline().strip()
        if st == 'artist:_':
            continue
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