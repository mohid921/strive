interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Mentor = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 17 22"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M0.214077 4.23513L3.73774 5.83443V7.89813H13.2621V5.83443L14.7185 5.17357V8.82892C14.4822 8.86226 14.3 9.06344 14.3 9.30531C14.3 9.51582 14.4379 9.69831 14.6362 9.76168L14.2782 12.0923C14.2672 12.163 14.288 12.2347 14.3357 12.2891C14.3831 12.3432 14.4518 12.3742 14.5238 12.3742H15.8294C15.9015 12.3742 15.9702 12.3432 16.018 12.2888C16.0651 12.2344 16.0859 12.163 16.075 12.0923L15.717 9.76168C15.9154 9.69831 16.0532 9.51582 16.0532 9.30531C16.0532 9.06344 15.8709 8.8623 15.6346 8.82892V4.75759L16.7861 4.23517C16.916 4.17579 17 4.04637 17 3.90556C17 3.76445 16.916 3.63498 16.7861 3.57629L9.27803 0.168137C9.03219 0.0567188 8.7704 0 8.49993 0C8.22947 0 7.96777 0.0567188 7.7221 0.168137L0.214164 3.57625C0.0840971 3.63528 0 3.76441 0 3.90552C0 4.04632 0.0840097 4.17575 0.214077 4.23513Z"
        fill="white"
      />
      <path
        d="M15.2329 17.7705L11.8693 16.4154C11.334 16.1729 10.9882 15.6408 10.9882 15.0596V14.5712C10.9882 14.3467 11.0258 14.1258 11.0898 13.933C11.1082 13.9087 12.9361 11.4784 13.1901 9.08273L13.198 9.00732H3.80166L3.80968 9.08273C4.06424 11.4784 5.89149 13.9087 5.89999 13.9144C5.97415 14.1262 6.0118 14.3471 6.0118 14.5712V15.0596C6.0118 15.6404 5.66578 16.1725 5.13314 16.4141L1.76482 17.7718C0.962715 18.1351 0.389549 18.8631 0.230593 19.7261L0.0522461 22H16.9478L16.7688 19.7191C16.6098 18.8627 16.0367 18.1348 15.2329 17.7705Z"
        fill="white"
      />
    </svg>
  );
};

export const User = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 22"
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.58057 5.37209C2.58057 2.40516 5.00689 0 7.99992 0C10.993 0 13.4193 2.40516 13.4193 5.37209C13.4193 8.33902 10.993 10.7442 7.99992 10.7442C5.00689 10.7442 2.58057 8.33902 2.58057 5.37209Z"
        fill="#066FCF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 17.7242C0 14.717 2.45934 12.2791 5.49309 12.2791H10.5069C13.5406 12.2791 16 14.717 16 17.7242C16 20.0857 14.0689 22 11.6866 22H4.31336C1.93116 22 0 20.0857 0 17.7242Z"
        fill="#066FCF"
      />
    </svg>
  );
};

export const Bag = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M7.61111 5.88889V4.91111C7.61111 3.5421 7.61111 2.85758 7.87754 2.33469C8.11189 1.87473 8.48584 1.50078 8.9458 1.26643C9.46869 1 10.1532 1 11.5222 1H13.4778C14.8468 1 15.5314 1 16.0542 1.26643C16.5141 1.50078 16.8881 1.87473 17.1224 2.33469C17.3889 2.85758 17.3889 3.5421 17.3889 4.91111V5.88889M17.3889 5.88889H7.36667C7.01135 5.88889 6.68678 5.88889 6.38889 5.89095M17.3889 5.88889H18.6111M6.38889 23V5.89095M6.38889 5.89095C4.96509 5.90085 4.15067 5.95804 3.50204 6.28853C2.8121 6.64007 2.25118 7.20099 1.89964 7.89093C1.5 8.67526 1.5 9.70198 1.5 11.7556V17.1333C1.5 19.1869 1.5 20.2136 1.89964 20.998C2.25118 21.6879 2.8121 22.2488 3.50204 22.6003C4.28637 23 5.31314 23 7.36667 23H17.6333C19.6869 23 20.7136 23 21.498 22.6003C22.1879 22.2488 22.7488 21.6879 23.1003 20.998C23.5 20.2136 23.5 19.1869 23.5 17.1333V11.7556C23.5 9.70198 23.5 8.67526 23.1003 7.89093C22.7488 7.20099 22.1879 6.64007 21.498 6.28853C20.7136 5.88889 19.6869 5.88889 17.6333 5.88889H18.6111M18.6111 23V5.88889"
        stroke="#066FCF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Atom = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M9.52246 4.98285C9.52246 5.00516 9.53361 5.02746 9.54477 5.04977C9.55592 5.07208 9.56707 5.09438 9.56707 5.11669C9.57023 5.09246 9.56786 5.06783 9.56013 5.04465C9.5524 5.02147 9.53953 5.00034 9.52246 4.98285Z"
        fill="#066FCF"
        stroke="white"
        stroke-width="0.6"
      />
      <path
        d="M9.86903 4.97787C9.86289 4.96151 9.85598 4.94616 9.85042 4.93447L9.83542 4.88895C9.78684 4.74148 9.72815 4.59756 9.65978 4.4582C9.53112 3.71142 9.64646 2.94263 9.98933 2.26602C10.3384 1.57708 10.9041 1.02184 11.5994 0.685632L11.5995 0.685663L11.6035 0.683613C12.4475 0.259561 13.4242 0.183805 14.3235 0.472647C15.2228 0.761489 15.9727 1.39184 16.4118 2.22804L16.4118 2.22804L16.4127 2.22956C16.6083 2.5969 16.7332 2.99771 16.7809 3.41115L16.8033 3.60464L16.9891 3.66298C19.0687 4.31577 20.9157 5.55498 22.3082 7.2318C23.6026 8.79048 24.4532 10.6657 24.7753 12.6603C24.1951 12.5094 23.5978 12.4314 22.9971 12.4288H22.9958C22.9123 12.4288 22.8204 12.4412 22.7484 12.4509C22.7471 12.4511 22.7459 12.4513 22.7446 12.4514C22.4059 10.9287 21.6949 9.51199 20.6735 8.32914C19.5931 7.07789 18.2031 6.13211 16.6426 5.58633L16.4119 5.50564L16.2863 5.71529C15.9602 6.25945 15.4937 6.70587 14.9357 7.00777C14.3777 7.30967 13.7488 7.45593 13.1149 7.43123C12.481 7.40652 11.8654 7.21176 11.3326 6.86735C10.7998 6.52295 10.3695 6.04157 10.0867 5.47368L10.0815 5.46327L10.0756 5.45329C9.99926 5.32589 9.93677 5.19075 9.88911 5.05016C9.88374 5.02033 9.87572 4.99571 9.86903 4.97787Z"
        fill="#066FCF"
        stroke="white"
        stroke-width="0.6"
      />
      <path
        d="M7.10165 17.5364L7.10162 17.5364L7.10346 17.54C7.424 18.1588 7.55826 18.8572 7.48997 19.5507C7.42168 20.2442 7.15377 20.9031 6.7187 21.4474C6.28362 21.9918 5.70004 22.3983 5.03864 22.6178C4.37724 22.8373 3.66639 22.8603 2.99218 22.6841C2.31797 22.5078 1.70933 22.1398 1.23997 21.6247C0.770613 21.1096 0.460671 20.4695 0.347684 19.7819C0.234697 19.0942 0.323513 18.3886 0.603374 17.7503C0.883235 17.1121 1.34214 16.5688 1.9245 16.1861L2.07478 16.0873L2.0585 15.9082C2.05511 15.8708 2.05172 15.8338 2.04837 15.7972C2.00727 15.348 1.97053 14.9465 1.97051 14.5082C1.97642 12.6494 2.43348 10.8198 3.30241 9.17658C4.10089 7.6666 5.22523 6.35548 6.59179 5.33705C6.7211 5.86592 6.90633 6.38001 7.14461 6.87053L7.15621 6.89441L7.17182 6.91588C7.24611 7.01804 7.31668 7.12281 7.38342 7.22999C6.36603 8.10144 5.53961 9.17503 4.95732 10.3835C4.33804 11.6688 4.01018 13.075 3.99715 14.5016C3.98818 14.7864 4.00412 15.0715 4.0448 15.3536L4.0782 15.5852L4.31099 15.6092C4.90066 15.6699 5.46551 15.8783 5.95328 16.2152C6.44106 16.5521 6.83602 17.0065 7.10165 17.5364Z"
        fill="#066FCF"
        stroke="white"
        stroke-width="0.6"
      />
      <path
        d="M26.1135 17.5383L26.1135 17.5383L26.1158 17.5428C26.333 17.9513 26.4661 18.3991 26.5074 18.8599C26.5486 19.3207 26.4972 19.785 26.3561 20.2256C26.215 20.6662 25.987 21.074 25.6857 21.4251C25.3845 21.7761 25.0159 22.0633 24.6018 22.2696L24.5949 22.273L24.5882 22.2768C24.1762 22.5093 23.7181 22.6481 23.2464 22.6833C22.7747 22.7186 22.301 22.6495 21.859 22.4809L21.678 22.4118L21.5406 22.5484C19.3954 24.6817 16.4953 25.8827 13.47 25.8908L13.4688 25.8908C11.548 25.9033 9.65879 25.4228 7.98071 24.4988C8.53108 24.0957 9.00927 23.6015 9.39432 23.0371C10.6518 23.6389 12.0266 23.9597 13.4227 23.9757L13.4255 23.9757C15.8142 23.9814 18.116 23.0796 19.8652 21.4528L20.0296 21.2999L19.9292 21.099C19.9017 21.0439 19.8632 20.9798 19.8324 20.9285L19.8289 20.9227C19.7933 20.8633 19.7668 20.8187 19.7507 20.7867L19.7508 20.7867L19.7497 20.7845C19.3192 19.9406 19.2416 18.9603 19.5339 18.0592C19.8262 17.1581 20.4646 16.41 21.3085 15.9795C22.1524 15.549 23.1327 15.4714 24.0338 15.7638C24.9349 16.0561 25.683 16.6944 26.1135 17.5383Z"
        fill="#066FCF"
        stroke="white"
        stroke-width="0.6"
      />
      <path
        d="M13.6581 17.5929L13.6478 17.5926L13.6374 17.593C12.983 17.6183 12.3365 17.4445 11.7833 17.0947C11.7015 17.026 11.6019 16.9814 11.4958 16.9662C11.385 16.9504 11.2721 16.9674 11.1711 17.0148L9.97156 17.4692L10.4062 16.2841L10.4103 16.2732L10.4134 16.262C10.4394 16.1695 10.4458 16.0726 10.4322 15.9775C10.4192 15.8863 10.388 15.7986 10.3406 15.7196C10.0686 15.2079 9.9163 14.6411 9.89502 14.062C9.93261 13.1023 10.3449 12.1954 11.0437 11.536C11.745 10.8743 12.6785 10.515 13.6425 10.536L13.6503 10.5362L13.6581 10.5359C14.628 10.5067 15.5701 10.8621 16.2791 11.5246C16.9853 12.1847 17.403 13.0963 17.4421 14.0619C17.4044 15.0284 16.9872 15.9412 16.2808 16.6024C15.5717 17.2661 14.6288 17.6222 13.6581 17.5929Z"
        fill="#066FCF"
        stroke="white"
        stroke-width="0.6"
      />
    </svg>
  );
};

export const Location = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 56 55"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="28.4043" cy="27.5" r="27.5" fill="white" />
      <path
        d="M28.2163 15C23.0738 15 18.9043 19.0916 18.9043 24.1381C18.9043 26.1253 19.5682 27.9487 20.6716 29.442C20.6914 29.4778 20.6945 29.5178 20.717 29.5521L26.925 38.6902C27.2129 39.1139 27.6979 39.3683 28.2163 39.3683C28.7347 39.3683 29.2197 39.1139 29.5076 38.6902L35.7156 29.5521C35.7385 29.5178 35.7412 29.4778 35.761 29.442C36.8645 27.9487 37.5283 26.1253 37.5283 24.1381C37.5283 19.0916 33.3589 15 28.2163 15ZM28.2163 27.1841C26.5021 27.1841 25.1123 25.8203 25.1123 24.1381C25.1123 22.4559 26.5021 21.0921 28.2163 21.0921C29.9305 21.0921 31.3203 22.4559 31.3203 24.1381C31.3203 25.8203 29.9305 27.1841 28.2163 27.1841Z"
        fill="#066FCF"
      />
    </svg>
  );
};

export const Mail = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 56 55"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="28.4043" cy="27.5" r="27.5" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.9551 33.7379L15.9043 23.3113V36.7224H40.006V23.3113L27.9551 33.7379ZM27.9563 30.5928L15.9043 20.1591V19H40.006V20.1591L27.9563 30.5928Z"
        fill="#066FCF"
      />
    </svg>
  );
};

export const Phone = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 56 55"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="28.4043" cy="27.5" r="27.5" fill="white" />
      <path
        d="M32.4242 30.5014L31.8975 31.062C31.8975 31.062 30.6455 32.3947 27.2284 28.7572C23.8113 25.1198 25.0632 23.7872 25.0632 23.7872L25.3949 23.4342C26.2119 22.5644 26.289 21.1681 25.5761 20.1487L24.1179 18.0635C23.2356 16.8018 21.5307 16.6352 20.5194 17.7116L18.7043 19.6437C18.2029 20.1774 17.8669 20.8694 17.9076 21.6369C18.0119 23.6006 18.8418 27.8255 23.4727 32.755C28.3836 37.9824 32.9915 38.1902 34.8759 38.0022C35.4719 37.9427 35.9902 37.6178 36.4078 37.1731L38.0506 35.4245C39.1595 34.2442 38.8468 32.2207 37.428 31.395L35.2187 30.1093C34.2871 29.5671 33.1523 29.7264 32.4242 30.5014Z"
        fill="#066FCF"
      />
    </svg>
  );
};

export const Quote = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 41 34"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12.6999 16.2861H3.32004C3.48003 7.27472 5.31998 5.7889 11.0599 2.50855C11.7199 2.12262 11.9399 1.31218 11.5399 0.656114C11.1399 0.0193395 10.2998 -0.192899 9.61985 0.193024C2.85996 4.05226 0.5 6.40636 0.5 17.6368V28.0375C0.5 31.3371 3.28001 34 6.67996 34H12.6799C16.1998 34 18.8596 31.4336 18.8596 28.0375V22.2486C18.8796 18.8525 16.2198 16.2861 12.6999 16.2861Z"
        fill="#066FCF"
      />
      <path
        d="M34.3399 16.2861H24.9601C25.1201 7.27472 26.9603 5.7889 32.7002 2.50855C33.3602 2.12262 33.5802 1.31218 33.1802 0.656114C32.7802 0.0193395 31.94 -0.192899 31.26 0.193024C24.5001 4.05226 22.1401 6.40636 22.1401 17.6368V28.0375C22.1401 31.3371 24.9203 34 28.3202 34H34.3201C37.8401 34 40.4998 31.4336 40.4998 28.0375V22.2486C40.5198 18.8525 37.8599 16.2861 34.3399 16.2861Z"
        fill="#066FCF"
      />
    </svg>
  );
};

export const Menu = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 17 14"
      fill="none"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );
};
export const Cross = ({ size, className, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
};
