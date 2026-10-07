function PageHeader({ title, page }) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-[11px]">Welcome {page} Page</p>
      </div>
      <p className="text-[11px] text-gray-400">
        Home › <span className="text-brand">{page}</span>
      </p>
    </div>
  );
}

export default PageHeader;