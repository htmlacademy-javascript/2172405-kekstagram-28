import { getRandomArrayElement, getRandomInteger, createIdGenerator } from './util.js';

const PIC_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENT_COUNT = 5;
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];
const DESCRIPTIONS = [
  'Никто не купается, все на завтраке',
  'Уж послали так послали',
  'И ни-ко-го! Идеально!',
  'Честно пытался смотреть в глаза, но за очками их не видно',
  '- Ой, меня кто-то снизу щекочет! - И меня!',
  'Это вам не черный бумер',
  'Нано-полдник',
  'Дабл джус, порфавор',
  'Заберите меня отсюда! Здесь слишком хорошо!',
  'У нас все дома',
  'Дорожка к щастью',
  'Низковат клиренс, до нашей бы дачи не доехал',
  'В ресторане высокой кухни. Хорошо, что дома еще остались сосиски',
  'Сам ты суши, кожаный. Я в костюме подарка',
  'Моя самая удачная покупка на АлиЭкспресс',
  'Под крылом самолета о чем-то поет',
  'Запевай!',
  'Моя прЭлесть',
  'Теперь ночью не заблудишься',
  'Отпуск начинается!',
  'Мир должен знать, что я ем',
  'Это там Вася и Сева, просто далеко',
  'Дратути',
  'Лучший вечер!',
  'А-а крокодилобегемоты'
];

const NAMES = [
  'Хуан',
  'Кончита',
  'Хесус',
  'Соледад',
  'Педро',
  'Хосе',
  'Гваделупе',
  'Мария',
];

const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENT_MESSAGES))
    .join(' ');

const createComment = () => ({
  id: createIdGenerator(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${getRandomInteger(1, PIC_COUNT)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: PIC_COUNT}, (_, index) =>
    createPicture(index + 1)
  );

export { getPictures };
