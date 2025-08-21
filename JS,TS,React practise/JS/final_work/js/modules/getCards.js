export default async function getCards() {
  const response = await fetch('./data/data.json');
  if (!response.ok) {
    console.error('Ошибка загрузки файла:', response.status);
  }
  const data = await response.json();
  return data;
}