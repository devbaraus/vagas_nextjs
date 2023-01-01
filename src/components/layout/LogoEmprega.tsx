import Link from 'next/link';

type Props = { className?: string };

const LogoEmprega = ({ className }: Props) => {
  return (
    <Link href="/">
      <svg
        width="248"
        height="60"
        viewBox="0 0 248 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_128_6899)">
          <path
            d="M52.7969 44.487C50.9131 43.776 48.7047 44.1782 47.1885 45.6944C45.1248 47.7581 41.7788 47.7581 39.7151 45.6944C38.724 44.7034 38.1673 43.3592 38.1673 41.9577C38.1673 40.5562 38.724 39.212 39.7151 38.221L35.9783 41.9577C31.8509 46.0851 31.8509 52.7772 35.9783 56.9046C36.7233 57.6512 37.5758 58.2821 38.5076 58.7762C42.501 60.8899 47.5637 60.2661 50.9252 56.9046L54.6619 53.1679C55.2859 52.5433 55.7436 51.7725 55.9932 50.9258C56.2428 50.079 56.2764 49.1832 56.091 48.3201C55.9055 47.4569 55.5069 46.654 54.9315 45.9845C54.3562 45.3149 53.6223 44.8001 52.7969 44.487Z"
            fill="#F18701"
          />
          <path
            d="M89.7873 3.09561C93.9147 7.22304 93.9147 13.9151 89.7873 18.0425L54.6621 53.1677C55.2861 52.5432 55.7437 51.7724 55.9934 50.9256C56.243 50.0788 56.2766 49.183 56.0912 48.3199C55.9057 47.4568 55.5071 46.6538 54.9317 45.9843C54.3563 45.3148 53.6225 44.8 52.7971 44.4868C50.9133 43.7758 48.7049 44.178 47.1887 45.6942C45.125 47.758 41.779 47.758 39.7152 45.6942C38.7242 44.7032 38.1674 43.3591 38.1674 41.9575C38.1674 40.556 38.7242 39.2118 39.7152 38.2208L74.8404 3.09561C77.9359 0.000109309 82.4741 -0.773842 86.2911 0.773908C87.6004 1.30551 88.7894 2.09507 89.7873 3.09561V3.09561Z"
            fill="#F18701"
          />
          <path
            d="M38.1675 41.9576C38.1666 42.6517 38.3029 43.3391 38.5685 43.9804C38.8342 44.6217 39.2239 45.2041 39.7154 45.6943C41.7791 47.758 45.1251 47.758 47.1888 45.6943C48.7051 44.1781 50.9135 43.7759 52.7972 44.4869C53.6229 44.7996 54.3571 45.3143 54.9328 45.9838C55.5085 46.6533 55.9072 47.4564 56.0927 48.3196C56.2782 49.1829 56.2444 50.0789 55.9946 50.9257C55.7447 51.7726 55.2867 52.5434 54.6623 53.1677L50.9256 56.9045C47.564 60.266 42.5014 60.8897 38.508 58.7761C37.5762 58.282 36.7236 57.6511 35.9787 56.9045L3.09553 24.0213C-1.03191 19.8939 -1.03206 13.202 3.09553 9.07441C4.09344 8.07387 5.28244 7.28431 6.59175 6.75271C10.4087 5.20496 14.9469 5.97891 18.0424 9.07441L43.4521 34.4841L39.7154 38.2208C39.2239 38.711 38.8342 39.2935 38.5685 39.9347C38.3029 40.576 38.1666 41.2634 38.1675 41.9576V41.9576Z"
            fill="currentColor"
          />
        </g>
        <path
          d="M123.103 5.15L115.273 26H111.313L103.453 5.15H107.113L113.293 22.49L119.503 5.15H123.103ZM138.533 21.74H129.803L128.303 26H124.733L132.203 5.12H136.163L143.633 26H140.033L138.533 21.74ZM137.573 18.95L134.183 9.26L130.763 18.95H137.573ZM161.971 11.15C161.431 10.11 160.681 9.33 159.721 8.81C158.761 8.27 157.651 8 156.391 8C155.011 8 153.781 8.31 152.701 8.93C151.621 9.55 150.771 10.43 150.151 11.57C149.551 12.71 149.251 14.03 149.251 15.53C149.251 17.03 149.551 18.36 150.151 19.52C150.771 20.66 151.621 21.54 152.701 22.16C153.781 22.78 155.011 23.09 156.391 23.09C158.251 23.09 159.761 22.57 160.921 21.53C162.081 20.49 162.791 19.08 163.051 17.3H155.221V14.57H166.711V17.24C166.491 18.86 165.911 20.35 164.971 21.71C164.051 23.07 162.841 24.16 161.341 24.98C159.861 25.78 158.211 26.18 156.391 26.18C154.431 26.18 152.641 25.73 151.021 24.83C149.401 23.91 148.111 22.64 147.151 21.02C146.211 19.4 145.741 17.57 145.741 15.53C145.741 13.49 146.211 11.66 147.151 10.04C148.111 8.42 149.401 7.16 151.021 6.26C152.661 5.34 154.451 4.88 156.391 4.88C158.611 4.88 160.581 5.43 162.301 6.53C164.041 7.61 165.301 9.15 166.081 11.15H161.971ZM182.654 21.74H173.924L172.424 26H168.854L176.324 5.12H180.284L187.754 26H184.154L182.654 21.74ZM181.694 18.95L178.304 9.26L174.884 18.95H181.694ZM197.872 26.21C196.472 26.21 195.212 25.97 194.092 25.49C192.972 24.99 192.092 24.29 191.452 23.39C190.812 22.49 190.492 21.44 190.492 20.24H194.152C194.232 21.14 194.582 21.88 195.202 22.46C195.842 23.04 196.732 23.33 197.872 23.33C199.052 23.33 199.972 23.05 200.632 22.49C201.292 21.91 201.622 21.17 201.622 20.27C201.622 19.57 201.412 19 200.992 18.56C200.592 18.12 200.082 17.78 199.462 17.54C198.862 17.3 198.022 17.04 196.942 16.76C195.582 16.4 194.472 16.04 193.612 15.68C192.772 15.3 192.052 14.72 191.452 13.94C190.852 13.16 190.552 12.12 190.552 10.82C190.552 9.62 190.852 8.57 191.452 7.67C192.052 6.77 192.892 6.08 193.972 5.6C195.052 5.12 196.302 4.88 197.722 4.88C199.742 4.88 201.392 5.39 202.672 6.41C203.972 7.41 204.692 8.79 204.832 10.55H201.052C200.992 9.79 200.632 9.14 199.972 8.6C199.312 8.06 198.442 7.79 197.362 7.79C196.382 7.79 195.582 8.04 194.962 8.54C194.342 9.04 194.032 9.76 194.032 10.7C194.032 11.34 194.222 11.87 194.602 12.29C195.002 12.69 195.502 13.01 196.102 13.25C196.702 13.49 197.522 13.75 198.562 14.03C199.942 14.41 201.062 14.79 201.922 15.17C202.802 15.55 203.542 16.14 204.142 16.94C204.762 17.72 205.072 18.77 205.072 20.09C205.072 21.15 204.782 22.15 204.202 23.09C203.642 24.03 202.812 24.79 201.712 25.37C200.632 25.93 199.352 26.21 197.872 26.21ZM117.703 51.74H108.973L107.473 56H103.903L111.373 35.12H115.333L122.803 56H119.203L117.703 51.74ZM116.743 48.95L113.353 39.26L109.933 48.95H116.743ZM143.181 56H139.761L129.471 40.43V56H126.051V35.12H129.471L139.761 50.66V35.12H143.181V56ZM160.242 51.74H151.512L150.012 56H146.442L153.912 35.12H157.872L165.342 56H161.742L160.242 51.74ZM159.282 48.95L155.892 39.26L152.472 48.95H159.282ZM158.982 30.68L152.352 33.95V31.43L158.982 27.77V30.68ZM183.17 41.36C183.17 42.42 182.92 43.42 182.42 44.36C181.92 45.3 181.12 46.07 180.02 46.67C178.92 47.25 177.51 47.54 175.79 47.54H172.01V56H168.59V35.15H175.79C177.39 35.15 178.74 35.43 179.84 35.99C180.96 36.53 181.79 37.27 182.33 38.21C182.89 39.15 183.17 40.2 183.17 41.36ZM175.79 44.75C177.09 44.75 178.06 44.46 178.7 43.88C179.34 43.28 179.66 42.44 179.66 41.36C179.66 39.08 178.37 37.94 175.79 37.94H172.01V44.75H175.79ZM195.942 56.21C194.002 56.21 192.212 55.76 190.572 54.86C188.952 53.94 187.662 52.67 186.702 51.05C185.762 49.41 185.292 47.57 185.292 45.53C185.292 43.49 185.762 41.66 186.702 40.04C187.662 38.42 188.952 37.16 190.572 36.26C192.212 35.34 194.002 34.88 195.942 34.88C197.902 34.88 199.692 35.34 201.312 36.26C202.952 37.16 204.242 38.42 205.182 40.04C206.122 41.66 206.592 43.49 206.592 45.53C206.592 47.57 206.122 49.41 205.182 51.05C204.242 52.67 202.952 53.94 201.312 54.86C199.692 55.76 197.902 56.21 195.942 56.21ZM195.942 53.24C197.322 53.24 198.552 52.93 199.632 52.31C200.712 51.67 201.552 50.77 202.152 49.61C202.772 48.43 203.082 47.07 203.082 45.53C203.082 43.99 202.772 42.64 202.152 41.48C201.552 40.32 200.712 39.43 199.632 38.81C198.552 38.19 197.322 37.88 195.942 37.88C194.562 37.88 193.332 38.19 192.252 38.81C191.172 39.43 190.322 40.32 189.702 41.48C189.102 42.64 188.802 43.99 188.802 45.53C188.802 47.07 189.102 48.43 189.702 49.61C190.322 50.77 191.172 51.67 192.252 52.31C193.332 52.93 194.562 53.24 195.942 53.24ZM213.377 53.24H220.427V56H209.957V35.15H213.377V53.24ZM226.707 35.15V56H223.287V35.15H226.707ZM238.067 56.21C236.667 56.21 235.407 55.97 234.287 55.49C233.167 54.99 232.287 54.29 231.647 53.39C231.007 52.49 230.687 51.44 230.687 50.24H234.347C234.427 51.14 234.777 51.88 235.397 52.46C236.037 53.04 236.927 53.33 238.067 53.33C239.247 53.33 240.167 53.05 240.827 52.49C241.487 51.91 241.817 51.17 241.817 50.27C241.817 49.57 241.607 49 241.187 48.56C240.787 48.12 240.277 47.78 239.657 47.54C239.057 47.3 238.217 47.04 237.137 46.76C235.777 46.4 234.667 46.04 233.807 45.68C232.967 45.3 232.247 44.72 231.647 43.94C231.047 43.16 230.747 42.12 230.747 40.82C230.747 39.62 231.047 38.57 231.647 37.67C232.247 36.77 233.087 36.08 234.167 35.6C235.247 35.12 236.497 34.88 237.917 34.88C239.937 34.88 241.587 35.39 242.867 36.41C244.167 37.41 244.887 38.79 245.027 40.55H241.247C241.187 39.79 240.827 39.14 240.167 38.6C239.507 38.06 238.637 37.79 237.557 37.79C236.577 37.79 235.777 38.04 235.157 38.54C234.537 39.04 234.227 39.76 234.227 40.7C234.227 41.34 234.417 41.87 234.797 42.29C235.197 42.69 235.697 43.01 236.297 43.25C236.897 43.49 237.717 43.75 238.757 44.03C240.137 44.41 241.257 44.79 242.117 45.17C242.997 45.55 243.737 46.14 244.337 46.94C244.957 47.72 245.267 48.77 245.267 50.09C245.267 51.15 244.977 52.15 244.397 53.09C243.837 54.03 243.007 54.79 241.907 55.37C240.827 55.93 239.547 56.21 238.067 56.21Z"
          fill="currentColor"
        />
        <defs>
          <clipPath id="clip0_128_6899">
            <rect width="92.8832" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default LogoEmprega;
