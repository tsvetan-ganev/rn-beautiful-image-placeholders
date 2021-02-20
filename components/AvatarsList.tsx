import React from 'react';
import {FlatList, Image, View} from 'react-native';

const placeholder = require('./../assets/placeholder.png');

const users = [
  {
    name: 'Loren Spears',
    email: 'loren.spears@gmail.com',
    position: 'Senior Developer',
    photo:
      'https://images.generated.photos/kIecntfuj2YSRc0RSkRXk2WF_5tg9qdt-w3Z-R3MBG0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk1MzMuanBn.jpg',
  },
  {
    name: 'Emre Topalo\u011flu',
    email: 'emre.topalo\u011flu@gmail.com',
    position: 'Office Assistant',
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    name: 'Pamela Kern',
    email: 'pamela.kern@gmail.com',
    position: 'Data Entry Clerk',
    photo:
      'https://images.generated.photos/ShcoP_JZbiaFjd6xxbJRhL-9EImWeVRUMGxxh1zMyAw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMTExNTAuanBn.jpg',
  },
  {
    name: 'Carys Metz',
    email: 'carys.metz@gmail.com',
    position: 'Receptionist',
    photo:
      'https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82',
  },
  {
    name: 'Gabriella Horton',
    email: 'gabriella.horton@gmail.com',
    position: 'Project Manager',
    photo: 'https://i.imgur.com/Mf09cmz.jpg',
  },
  {
    name: 'Kiernan Shipka',
    email: 'kiernan.shipka@gmail.com',
    position: 'Office Assistant',
    photo:
      'https://m.media-amazon.com/images/M/MV5BMjI4NDcyNjQxNl5BMl5BanBnXkFtZTgwMzI4OTM3NjM@._V1_UY256_CR13,0,172,256_AL_.jpg',
  },
  {
    name: 'Lucy Walker',
    email: 'lucy.walker@gmail.com',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/0.jpg',
  },
  {
    name: 'Mia Denys',
    email: 'mia.denys@gmail.com',
    position: 'Business Analyst',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Valentina Skinner',
    email: 'valentina.skinner@gmail.com',
    position: 'Call Center Representative',
    photo:
      'https://images.generated.photos/kA--V6R_YFh2BAMdzxzX557QkO0Xoq7kHpF1u0MOojs/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk2NzQuanBn.jpg',
  },
  {
    name: 'Katherine Moss',
    email: 'katherine.moss@gmail.com',
    position: 'Graphic Designer',
    photo:
      'https://images.generated.photos/ldeUMaGEpZBYVJS9M1yewl4zXrqGFtqyj2fTxtIagFI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwOTE4MDIuanBn.jpg',
  },
  {
    name: 'Rafael Siqueira',
    email: 'rafael.siqueira@gmail.com',
    position: 'Attorney',
    photo: 'https://uifaces.co/our-content/donated/5qGL6bdj.png',
  },
  {
    name: 'Kaylah Heller',
    email: 'kaylah.heller@gmail.com',
    position: 'Delivery Driver',
    photo: 'https://i.imgur.com/CdD60W6.jpg',
  },
  {
    name: 'Yasmeen Keen',
    email: 'yasmeen.keen@gmail.com',
    position: 'Sales Manager',
    photo:
      'https://images.generated.photos/D68XQHHQRJiUKsQU9ao1vQjErQQXhsymP_M08FCkNvI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwODc3MzEuanBn.jpg',
  },
  {
    name: 'Michael B. Jordan',
    email: 'michael.b..jordan@gmail.com',
    position: 'Medical Assistant',
    photo:
      'https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    name: 'Joshua Wilson',
    email: 'joshua.wilson@gmail.com',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/42.jpg',
  },
  {
    name: 'Mckayla Lilly',
    email: 'mckayla.lilly@gmail.com',
    position: 'Business Analyst',
    photo: 'https://i.imgur.com/vKBxTj7.jpg',
  },
  {
    name: 'Sanusi MD',
    email: 'sanusi.md@gmail.com',
    position: 'Part Time',
    photo: 'https://uifaces.co/our-content/donated/rKcB_zG6.jpg',
  },
  {
    name: 'Connor Gaunt',
    email: 'connor.gaunt@gmail.com',
    position: 'Accountant',
    photo: 'https://uifaces.co/our-content/donated/wFJeFgjq.jpg',
  },
  {
    name: 'Judy Sewell',
    email: 'judy.sewell@gmail.com',
    position: 'Software Engineer',
    photo:
      'https://images.generated.photos/YwMI3XR53HT-iBcEgGmudt-RXoyegaFwSWEajDo4yfI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTYwMTAuanBn.jpg',
  },
  {
    name: 'Brenon Kalu',
    email: 'brenon.kalu@gmail.com',
    position: 'Receptionist',
    photo: 'https://uifaces.co/our-content/donated/VUMBKh1U.jpg',
  },
  {
    name: 'Anna Kendrick',
    email: 'anna.kendrick@gmail.com',
    position: 'Sales',
    photo:
      'https://m.media-amazon.com/images/M/MV5BMjIzOTA0OTQyN15BMl5BanBnXkFtZTcwMjE1OTIwMw@@._V1_UY256_CR4,0,172,256_AL_.jpg',
  },
  {
    name: 'Lily James',
    email: 'lily.james@gmail.com',
    position: 'Medical Assistant',
    photo:
      'https://m.media-amazon.com/images/M/MV5BMTgxMjM2NTAyMV5BMl5BanBnXkFtZTgwOTU4NjU2NDE@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    name: 'Micheal Murphy',
    email: 'micheal.murphy@gmail.com',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/men/95.jpg',
  },
  {
    name: 'Sarah Wright',
    email: 'sarah.wright@gmail.com',
    position: 'Director',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTgzODAyODA1Ml5BMl5BanBnXkFtZTcwNTIxMDk5MQ@@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    name: 'D\u00c3\u00a9bora Edelberg',
    email: 'd\u00c3\u00a9bora.edelberg@gmail.com',
    position: 'Customer Service',
    photo: 'https://uifaces.co/our-content/donated/UZ0VIIh3.png',
  },
  {
    name: 'Mila Kunis',
    email: 'mila.kunis@gmail.com',
    position: 'Executive Assistant',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODQyNTQyNzY4MV5BMl5BanBnXkFtZTcwODg5MDA3MQ@@._V1_UY256_CR21,0,172,256_AL_.jpg',
  },
  {
    name: 'Zechariah Burrell',
    email: 'zechariah.burrell@gmail.com',
    position: 'Part Time',
    photo:
      'https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3e378252a934e660f231666b51bd269a',
  },
  {
    name: 'Janae Randolph',
    email: 'janae.randolph@gmail.com',
    position: 'Customer Service Representative',
    photo:
      'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Emmalee Mclain',
    email: 'emmalee.mclain@gmail.com',
    position: 'Senior Developer',
    photo: 'https://i.imgur.com/R4dl8Rb.jpg',
  },
  {
    name: 'Raymond Atkins',
    email: 'raymond.atkins@gmail.com',
    position: 'Accounting',
    photo:
      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Jorge Callalle',
    email: 'jorge.callalle@gmail.com',
    position: 'Call Center Representative',
    photo: 'https://uifaces.co/our-content/donated/TRkRhV48.jpg',
  },
  {
    name: 'Vijaybhuva',
    email: 'vijaybhuva@gmail.com',
    position: 'Call Center Representative',
    photo: 'https://uifaces.co/our-content/donated/kMRWDAFT.png',
  },
  {
    name: 'Michele Mappa',
    email: 'michele.mappa@gmail.com',
    position: 'Lead Developer',
    photo: 'https://uifaces.co/our-content/donated/qDVQYlrV.jpg',
  },
  {
    name: 'Sanjay',
    email: 'sanjay@gmail.com',
    position: 'Senior Developer',
    photo: 'https://uifaces.co/our-content/donated/Hq1VbREd.png',
  },
  {
    name: 'Parth Patel',
    email: 'parth.patel@gmail.com',
    position: 'Manager',
    photo: 'https://uifaces.co/our-content/donated/u4HmMtIQ.jpg',
  },
  {
    name: 'Nitzan',
    email: 'nitzan@gmail.com',
    position: 'Delivery Driver',
    photo: 'https://uifaces.co/our-content/donated/IASPQqhS.jpg',
  },
  {
    name: 'Krunal Sojitra',
    email: 'krunal.sojitra@gmail.com',
    position: 'Receptionist',
    photo: 'https://uifaces.co/our-content/donated/tXpSCC2T.jpg',
  },
  {
    name: 'G. Hannelius',
    email: 'g..hannelius@gmail.com',
    position: 'Graphic Designer',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZWI4MmUwODYtOGUyZS00YWM1LTliYmMtMzNlYTE0ODljYzVjXkEyXkFqcGdeQXVyMjA2MjE5NTM@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    name: 'Tianna Fuller',
    email: 'tianna.fuller@gmail.com',
    position: 'Clerical',
    photo:
      'https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Sasha Ho',
    email: 'sasha.ho@gmail.com',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1496203695688-3b8985780d6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Spencer Horton',
    email: 'spencer.horton@gmail.com',
    position: 'Lead Developer',
    photo:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Kayley Dwyer',
    email: 'kayley.dwyer@gmail.com',
    position: 'Director',
    photo:
      'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Sierra Carter',
    email: 'sierra.carter@gmail.com',
    position: 'Senior Developer',
    photo:
      'https://images.generated.photos/-RqFRv3JXdtlx37hdwdAQi0ApkquqAoDjVdVHcKArSA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA3/MDczNTYuanBn.jpg',
  },
  {
    name: 'Lauren German',
    email: 'lauren.german@gmail.com',
    position: 'Customer Service Representative',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNjY0NTA0Ml5BMl5BanBnXkFtZTgwMTUxMTMyNjE@._V1_UY256_CR5,0,172,256_AL_.jpg',
  },
  {
    name: 'Travis Fimmel',
    email: 'travis.fimmel@gmail.com',
    position: 'Manager',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTU0NjU0NzczN15BMl5BanBnXkFtZTcwMTc3MjMyOQ@@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    name: 'Korbyn Colon',
    email: 'korbyn.colon@gmail.com',
    position: 'Senior Developer',
    photo:
      'https://images.unsplash.com/photo-1498190718497-403407ff7eb2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a51c09ba28b70eace6e53adc15ae90ba',
  },
  {
    name: 'Fox Mccloud',
    email: 'fox.mccloud@gmail.com',
    position: 'Director',
    photo:
      'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
  },
  {
    name: 'Ryan Reynolds',
    email: 'ryan.reynolds@gmail.com',
    position: 'Marketing',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY256_CR6,0,172,256_AL_.jpg',
  },
  {
    name: 'Natali Craig',
    email: 'natali.craig@gmail.com',
    position: 'Executive Assistant',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Dasia Lovell',
    email: 'dasia.lovell@gmail.com',
    position: 'Office Assistant',
    photo:
      'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
  },
];

export default function AvatarsList() {
  const size = 64;

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.email}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: 'space-around',
      }}
      renderItem={(item) => {
        return (
          <View>
            <Image
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                margin: 12,
              }}
              defaultSource={placeholder}
              source={{
                uri: item.item.photo + '?random=' + Math.random(),
              }}
              width={size}
              height={size}
            />
          </View>
        );
      }}
    />
  );
}
