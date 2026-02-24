export const FilterDropdown = () => {
  return (
    <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
      <div className="neo-filter-wrapper">
        <button 
          type="button" 
          className="hide-filter-btn" 
          title="Hide Filter"
        >
          <span>Hide Filter</span>
        </button>
        <ul className="filter-list">
          <li title="Filter by Productivity" className="">
            <span className="filter-name">Productivity</span>
            <span className="filter-count">27</span>
          </li>
          <li title="Filter by Business" className="">
            <span className="filter-name">Business</span>
            <span className="filter-count">20</span>
          </li>
          <li title="Filter by Social Networking" className="">
            <span className="filter-name">Social Networking</span>
            <span className="filter-count">7</span>
          </li>
          <li title="Filter by Books & Education" className="">
            <span className="filter-name">Books & Education</span>
            <span className="filter-count">3</span>
          </li>
          <li title="Filter by Entertainment" className="">
            <span className="filter-name">Entertainment</span>
            <span className="filter-count">3</span>
          </li>
          <li title="Filter by Graphics & Design" className="">
            <span className="filter-name">Graphics & Design</span>
            <span className="filter-count">3</span>
          </li>
          <li title="Filter by Photo & Video" className="">
            <span className="filter-name">Photo & Video</span>
            <span className="filter-count">3</span>
          </li>
          <li title="Filter by Lifestyle" className="">
            <span className="filter-name">Lifestyle</span>
            <span className="filter-count">2</span>
          </li>
          <li title="Filter by Magazines & News" className="">
            <span className="filter-name">Magazines & News</span>
            <span className="filter-count">2</span>
          </li>
          <li title="Filter by Shopping" className="">
            <span className="filter-name">Shopping</span>
            <span className="filter-count">2</span>
          </li>
          <li title="Filter by Utilities" className="">
            <span className="filter-name">Utilities</span>
            <span className="filter-count">2</span>
          </li>
          <li title="Filter by Food & Drink" className="">
            <span className="filter-name">Food & Drink</span>
            <span className="filter-count">1</span>
          </li>
          <li title="Filter by Sports" className="">
            <span className="filter-name">Sports</span>
            <span className="filter-count">1</span>
          </li>
          <li title="Filter by Travel" className="">
            <span className="filter-name">Travel</span>
            <span className="filter-count">1</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
