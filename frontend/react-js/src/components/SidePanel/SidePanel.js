import AddForm from '../AddForm/AddForm';
import List from '../List/List';

export default function SidePanel({
  isAdvertisementsList,
  isAddAdvertisementForm,
  visibleAdvertisements,
  selectedAdvertisement,
  setIsAddAdvertisementForm,
}) {
  const toggleAddFormVisibility = () =>
    setIsAddAdvertisementForm((prevState) => !prevState);

  return (
    <>
      <button className={'btn'} onClick={toggleAddFormVisibility}>
        {isAddAdvertisementForm ? 'Close form' : 'Add Advertisement'}
      </button>
      {isAddAdvertisementForm && <AddForm />}

      {isAdvertisementsList && (
        <List
          title={'Visible Advertisements:'}
          visibleAdvertisements={visibleAdvertisements}
          selectedAdvertisement={selectedAdvertisement}
        />
      )}
    </>
  );
}
