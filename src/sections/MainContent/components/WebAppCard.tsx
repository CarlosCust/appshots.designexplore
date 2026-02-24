export type WebAppCardProps = {
  imageUrl: string;
  imageAlt: string;
  appName: string;
  appDescription: string;
  appIconUrl: string;
  appLink: string;
  hasMultipleScreens?: boolean;
};

export const WebAppCard = (props: WebAppCardProps) => {
  return (
    <div className="card-item-block">
      <div className="card-container">
        <div className="card-header-container">
          <div className="card-header">
            <div className="checkbox-wrapper">
              <input type="checkbox" className="app-checkbox" />
              <label title="select" className="checkbox-label"></label>
            </div>
          </div>
        </div>
        <div className="carousel">
          <div className="carousel-container">
            <div className="carousel-slide active">
              <img 
                src={props.imageUrl} 
                alt={props.imageAlt} 
                loading="lazy" 
                className="carousel-image" 
                decoding="async" 
              />
            </div>
          </div>
        </div>
        <div className="card-link-dummy" title="View App"></div>
        {props.hasMultipleScreens && (
          <div className="card-dots">
            <div className="dots-default">
              <span className="dot active hexagon"></span>
              <span className="dot"></span>
            </div>
            <div className="dots-hover">
              <button type="button" title="Previous" className="nav-button prev" disabled></button>
              <div className="dots-hover-container">
                <span className="dot active hexagon"></span>
                <span className="dot"></span>
              </div>
              <button type="button" title="Next" className="nav-button next"></button>
            </div>
          </div>
        )}
      </div>
      <a href={props.appLink} className="card-footer" title="View App">
        <div className="app-info">
          <img src={props.appIconUrl} alt={props.appName} />
          <div className="app-details">
            <h2>{props.appName}</h2>
            <p>{props.appDescription}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
