import Breadcrumbs from './Breadcrumbs';
import EngagementDetails from './Details';
import SelectSection from './Selection';

function EditEngagement() {
  return (
    <>
      <Breadcrumbs />

      <div className="mx-6">
        <div
          aria-label="Card"
          className="card card-bordered bg-base-100 p-0 shadow-sm"
        >
          <div className="card-body gap-0 p-0">
            <div className="card-title" />
            <div className="flex flex-row">
              <EngagementDetails />
              <SelectSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditEngagement;
