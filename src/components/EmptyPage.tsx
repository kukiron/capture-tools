type Props = {
  title: string;
  description?: string;
  imageUrl: string;
};

function EmptyPage({ title, description, imageUrl }: Props) {
  return (
    <div className="lg:col-span-7">
      <div className="px-6">
        <div className="mb-2 flex flex-row items-end gap-2">
          {/* Page Title */}
          <div className="grow truncate">
            <h4 className="truncate text-xl">{title}</h4>
          </div>
        </div>

        <div className="flex animate-pulse flex-col items-center justify-center px-6">
          <img
            className="h-72 object-cover object-center pt-10"
            src={imageUrl}
            alt={description}
          />
          <div className="pt-4 text-xl">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default EmptyPage;
