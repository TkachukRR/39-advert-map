import AddForm from '../AddForm/AddForm';
import List from '../List/List';

export default function SidePanel({
  isAdvertisementsList,
  isAddAdvertisementForm,
  visibleAdvertisements,
  selectedAdvertisement,
  setSelectedAdvertisement,
  setIsAddAdvertisementForm,
}) {
  const toggleAddFormVisibility = () =>
    setIsAddAdvertisementForm((prevState) => !prevState);

  return (
    <>
      <button
        className={'btn'}
        style={{ marginBottom: '5px' }}
        onClick={toggleAddFormVisibility}
      >
        {isAddAdvertisementForm ? 'Закрити форму' : 'Додати оголошення'}
      </button>
      {isAddAdvertisementForm && <AddForm />}

      {isAdvertisementsList && (
        <List
          title={'Видимі на карті:'}
          visibleAdvertisements={visibleAdvertisements}
          selectedAdvertisement={selectedAdvertisement}
          setSelectedAdvertisement={setSelectedAdvertisement}
        />
      )}
    </>
  );
}
