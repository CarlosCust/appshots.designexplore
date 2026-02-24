import Link from "next/link";

export type AppCardProps = {
  imageUrl: string;
  imageAlt: string;
  appId?: string;
  appName?: string;
  appDescription?: string;
  appIconUrl?: string;
};

export const AppCard = (props: AppCardProps) => {
  const content = (
    <>
      {/* Screenshot Container */}
      <div className="relative bg-[#f5f5f5] overflow-hidden rounded-[28px] p-6">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[20px]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      {/* App Info Footer */}
      {props.appName && (
        <div className="flex items-center gap-3 pt-4 pb-2">
          {props.appIconUrl && (
            <img
              src={props.appIconUrl}
              alt={props.appName}
              className="h-10 w-10 rounded-xl object-cover border border-[#f0f0f0]"
            />
          )}
          <div className="min-w-0">
            <h2 className="text-[#121212] text-base font-semibold leading-tight truncate">
              {props.appName}
            </h2>
            {props.appDescription && (
              <p className="text-[#7a7a7a] text-sm leading-tight truncate mt-0.5">
                {props.appDescription}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );

  if (props.appId) {
    return (
      <Link href={`/apps/${props.appId}`} className="group block cursor-pointer">
        {content}
      </Link>
    );
  }

  return <div className="group">{content}</div>;
};
