import React, { FC } from 'react';
import { BaseIcon, IconProps } from './BaseIcon';

const SpotifyIcon: FC<IconProps> = (props) => (
    <BaseIcon viewBox="0 0 354.23 241.07" {...props}>
        <path
            d="M377,356.65C308.05,311.23,221.38,300.2,119.38,324c-20.48,4.76-13.57,35.84,7.25,31.17C290.73,317,351.64,386,368.19,386,384,386,390.23,365.38,377,356.65Z"
            transform="translate(-79.39 -144.95)"
        />
        <path
            d="M112.15,275.11C203.9,253.4,308.07,266,384,308c18.48,10.22,34-17.79,15.49-28C316.84,234.33,204,220.54,104.79,244c-20.57,4.84-13.29,36,7.36,31.12Z"
            transform="translate(-79.39 -144.95)"
        />
        <path
            d="M100,191.87c96.64-29.57,232.22-13.35,308.67,36.91,17.56,11.54,35.29-15.11,17.58-26.73-84.9-55.83-229.16-73.35-335.61-40.79-20.31,6.21-10.76,36.82,9.36,30.61Z"
            transform="translate(-79.39 -144.95)"
        />
    </BaseIcon>
);

export { SpotifyIcon };
