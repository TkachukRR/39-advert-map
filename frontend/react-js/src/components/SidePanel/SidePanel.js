import AddForm from '../AddForm/AddForm';
import List from '../List/List';
import Button from '../Button/Button';

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
      <div style={{ padding: '10px' }}>
        <Button onClick={toggleAddFormVisibility} subClass="toggle_form">
          {isAddAdvertisementForm ? 'Закрити форму' : 'Додати оголошення'}
        </Button>
        {isAddAdvertisementForm && <AddForm />}
      </div>
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
