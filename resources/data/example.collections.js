// » Complex Tuple
const collection01 = [
  { NAME: 'NAME_01', 'FIELD-01': 'VALUE_01', 'FIELD-02': 'VALUE_02', 'FIELD-04': 'VALUE_04' },
  {
    NAME: 'NAME_02',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
  },
  {
    NAME: 'NAME_03',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  { NAME: 'NAME_02', 'FIELD-01': 'VALUE_01', 'FIELD-02': 'VALUE_02' },
  {
    NAME: 'NAME_04',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  {
    NAME: 'NAME_05',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  { NAME: 'NAME_06', 'FIELD-01': 'VALUE_01', 'FIELD-05': 'VALUE_05' },
  {
    NAME: 'NAME_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  {
    NAME: 'NAME_06',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  {
    NAME: 'NAME_03',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  {
    NAME: 'NAME_07',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  {
    NAME: 'NAME_08',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  { NAME: 'NAME_02', 'FIELD-05': 'VALUE_05' },
  {
    NAME: 'NAME_09',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
  {
    NAME: 'NAME_10',
    'FIELD-01': 'VALUE_01',
    'FIELD-02': 'VALUE_02',
    'FIELD-03': 'VALUE_03',
    'FIELD-04': 'VALUE_04',
    'FIELD-05': 'VALUE_05',
  },
];

// » Complex Duple Values
const collection02 = [
  {
    NAME: 'NAME_01',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_04'],
  },
  {
    NAME: 'NAME_02',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04'],
  },
  {
    NAME: 'NAME_03',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  { NAME: 'NAME_02', VALUES: ['VALUE_01', 'VALUE_02'] },
  {
    NAME: 'NAME_04',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  {
    NAME: 'NAME_05',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  { NAME: 'NAME_06', VALUES: ['VALUE_01', 'VALUE_05'] },
  {
    NAME: 'NAME_01',
    VALUES: ['VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  {
    NAME: 'NAME_06',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  {
    NAME: 'NAME_03',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  {
    NAME: 'NAME_07',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  {
    NAME: 'NAME_08',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  { NAME: 'NAME_02', VALUES: ['VALUE_05'] },
  {
    NAME: 'NAME_09',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
  {
    NAME: 'NAME_10',
    VALUES: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'],
  },
];

// » Complex Duple Values With Repeat Key Field
const collection03 = [
  { NAME: 'NAME_01', values: ['VALUE_01', 'VALUE_02', 'VALUE_04'] },
  { NAME: 'NAME_02', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04'] },
  { NAME: 'NAME_03', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_02', values: ['VALUE_01', 'VALUE_02'] },
  { NAME: 'NAME_04', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_05', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_06', values: ['VALUE_01', 'VALUE_05'] },
  { NAME: 'NAME_01', values: ['VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_06', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_03', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_07', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_08', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_02', values: ['VALUE_05'] },
  { NAME: 'NAME_09', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
  { NAME: 'NAME_10', values: ['VALUE_01', 'VALUE_02', 'VALUE_03', 'VALUE_04', 'VALUE_05'] },
];

// » Simple Tuple
const collection04 = [
  // { id: 'id00', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6 },
  { id: 'id01', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id02', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id03', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id04', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id05', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id06', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id07', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id08', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id09', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
  { id: 'id10', v1: 1, v2: 2, v3: 3, v4: 4, v5: 5 },
];

// » Simple Duple Values
const collection05 = [
  // { id: 'id00', values: [1, 2, 3, 4, 5], addInfo: true },
  { id: 'id01', values: [1, 2, 3, 4, 5] },
  { id: 'id02', values: [1, 2, 3, 4, 5] },
  { id: 'id03', values: [1, 2, 3, 4, 5] },
  { id: 'id04', values: [1, 2, 3, 4, 5] },
  { id: 'id05', values: [1, 2, 3, 4, 5] },
  { id: 'id06', values: [1, 2, 3, 4, 5] },
  { id: 'id07', values: [1, 2, 3, 4, 5] },
  { id: 'id08', values: [1, 2, 3, 4, 5] },
  { id: 'id09', values: [1, 2, 3, 4, 5] },
  { id: 'id10', values: [1, 2, 3, 4, 5] },
];

// » Simple Duple Values With Repeat Key Field
const collection06 = [
  { id: 'id01', values: [1, 2, 3] },
  { id: 'id02', values: [1, 2] },
  { id: 'id03', values: [1, 2, 3, 4, 5] },
  { id: 'id04', values: [1, 2, 3, 4, 5] },
  { id: 'id01', values: [4, 5, 4, 5] },
  { id: 'id05', values: [1, 2, 3, 4, 5] },
  { id: 'id02', values: [3, 3, 4] },
  { id: 'id06', values: [1, 2, 3, 4, 5] },
  { id: 'id07', values: [1, 2, 3, 4, 5] },
  { id: 'id08', values: [1, 2, 3, 4, 5] },
  { id: 'id09', values: [1, 2, 3, 4, 5] },
  { id: 'id02', values: [1, 4, 4, 5] },
  { id: 'id10', values: [1, 2, 3, 4, 5] },
  { id: 'id01', values: [1, 2, 3, 3, 3] },
];

// » Simple Duple Values With Repeat Key values
const collection07 = [
  { id: 'id01', values: [1, 2, 3, 4, 5, 4, 5, 1, 2, 3, 3, 3] },
  { id: 'id02', values: [1, 2, 3, 3, 4, 1, 4, 4, 5] },
  { id: 'id03', values: [1, 2, 3, 4, 5] },
  { id: 'id04', values: [1, 2, 3, 4, 5] },
  { id: 'id05', values: [1, 2, 3, 4, 5] },
  { id: 'id06', values: [1, 2, 3, 4, 5] },
  { id: 'id07', values: [1, 2, 3, 4, 5] },
  { id: 'id08', values: [1, 2, 3, 4, 5] },
  { id: 'id09', values: [1, 2, 3, 4, 5] },
  { id: 'id10', values: [1, 2, 3, 4, 5] },
];

// » Simple Duple Values For Compact
const collection08 = [
  { id: 'id01', values: [1, 2, 3, 4, 5] },
  { id: 'id02', values: [1, 2, 3, 4, 5] },
  { id: 'id03', values: [1, 2, 3, 4, 5] },
  { id: 'id04', values: [1, 2, 3, 4, 5] },
  { id: 'id05', values: [1, 2, 3, 4, 5] },
  { id: 'id06', values: [1, 2, 3, 4, 5] },
  { id: 'id07', values: [1, 2, 3, 4, 5] },
  { id: 'id08', values: [1, 2, 3, 4, 5] },
  { id: 'id09', values: [1, 2, 3, 4, 5] },
  { id: 'id10', values: [1, 2, 3, 4, 5] },
];

// » Simple Duple With Repeat Records
const collection09 = [
  { id: 'id01', value: 1 },
  { id: 'id01', value: 2 },
  { id: 'id01', value: 3 },
  { id: 'id01', value: 4 },
  { id: 'id01', value: 5 },
  { id: 'id02', value: 1 },
  { id: 'id02', value: 2 },
  { id: 'id02', value: 3 },
  { id: 'id02', value: 4 },
  { id: 'id02', value: 5 },
  { id: 'id03', value: 1 },
  { id: 'id03', value: 2 },
  { id: 'id03', value: 3 },
  { id: 'id03', value: 4 },
  { id: 'id03', value: 5 },
  { id: 'id04', value: 1 },
  { id: 'id04', value: 2 },
  { id: 'id04', value: 3 },
  { id: 'id04', value: 4 },
  { id: 'id04', value: 5 },
  { id: 'id05', value: 1 },
  { id: 'id05', value: 2 },
  { id: 'id05', value: 3 },
  { id: 'id05', value: 4 },
  { id: 'id05', value: 5 },

  { id: 'id01', value: 2 },
  { id: 'id05', value: 5 },
  { id: 'id02', value: 4 },
  { id: 'id03', value: 2 },
  { id: 'id04', value: 2 },
  { id: 'id04', value: 2 },
  { id: 'id04', value: 5 },
];

// » Simple Duple for Excel Read
const collection10 = [
  { Id: 'id01', email: 1 },
  { Id: 'id01', email: 2 },
  { Id: 'id01', email: 3 },
  { Id: 'id01', email: 4 },
  { Id: 'id01', email: 5 },
  { Id: 'id02', email: 1 },
  { Id: 'id02', email: 2 },
  { Id: 'id02', email: 3 },
  { Id: 'id02', email: 4 },
  { Id: 'id02', email: 5 },
  { Id: 'id03', email: 1 },
  { Id: 'id03', email: 2 },
  { Id: 'id03', email: 3 },
  { Id: 'id03', email: 4 },
  { Id: 'id03', email: 5 },
  { Id: 'id04', email: 1 },
  { Id: 'id04', email: 2 },
  { Id: 'id04', email: 3 },
  { Id: 'id04', email: 4 },
  { Id: 'id04', email: 5 },
  { Id: 'id05', email: 1 },
  { Id: 'id05', email: 2 },
  { Id: 'id05', email: 3 },
  { Id: 'id05', email: 4 },
  { Id: 'id05', email: 5 },
  { Id: 'id01', email: 2 },
  { Id: 'id05', email: 5 },
  { Id: 'id02', email: 4 },
  { Id: 'id03', email: 2 },
  { Id: 'id04', email: 2 },
  { Id: 'id04', email: 2 },
  { Id: 'id04', email: 5 },
];

// » Simple Object
const simpleObject = {
  name: 'Victor Giovanni Beltrán Rodríguez',
  nickName: 'Bowie',
  age: 34,
};

// » Simple Array
const simpleArray = [1, 2, 3, 4, 5, 4, 5, 1, 2, 3, 3, 3];

//  ──[ EXPORT MODULE ]──────────────────────────────────────────────────────────────────
// eslint-disable-next-line no-multi-assign
const examples = (module.exports = exports = {});

examples.collection01 = collection01;
examples.collection02 = collection02;
examples.collection03 = collection03;
examples.collection04 = collection04;
examples.collection05 = collection05;
examples.collection06 = collection06;
examples.collection07 = collection07;
examples.collection08 = collection08;
examples.collection09 = collection09;
examples.collection10 = collection10;
examples.simpleObject = simpleObject;
examples.simpleArray = simpleArray;
