import React from 'react'
import DSwitch from '../components/DSwitch';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center relative h-screen space-y-6 bg-800'>
      <div className='flex flex-row items-end gap-4'>
        <svg className='text-100 fill-current' width='290' height='121' viewBox='0 0 290 121' xmlns='http://www.w3.org/2000/svg'>
          <path d='M120.628 102H108.596V85.744C108.596 83.4827 108.084 81.9467 107.06 81.136C106.036 80.2827 104.137 79.856 101.364 79.856C99.5293 79.856 98.1 80.0267 97.076 80.368C96.0947 80.7093 95.412 81.2853 95.028 82.096C94.644 82.864 94.452 83.952 94.452 85.36H92.98V79.536H95.092C95.4333 77.7013 96.0733 75.9947 97.012 74.416C97.9933 72.8373 99.38 71.5573 101.172 70.576C102.964 69.5947 105.225 69.104 107.956 69.104C110.815 69.104 113.183 69.6587 115.06 70.768C116.937 71.8773 118.324 73.392 119.22 75.312C120.159 77.1893 120.628 79.3227 120.628 81.712V102ZM94.452 102H82.42V59.12H94.452V102ZM137.481 102.64C134.494 102.64 132.019 102.107 130.057 101.04C128.094 99.9733 126.622 98.5227 125.641 96.688C124.702 94.8533 124.233 92.7627 124.233 90.416V69.744H136.265V86C136.265 88.2187 136.777 89.7547 137.801 90.608C138.867 91.4613 140.766 91.888 143.497 91.888C146.27 91.888 148.105 91.504 149.001 90.736C149.939 89.9253 150.409 88.4747 150.409 86.384H151.625L152.649 92.208H150.537C150.323 94 149.747 95.6853 148.809 97.264C147.87 98.8427 146.483 100.144 144.649 101.168C142.814 102.149 140.425 102.64 137.481 102.64ZM162.441 102H151.177V92.08L150.409 91.76V69.744H162.441V102ZM173.149 112.88H167.325V102H176.669C177.65 102 178.397 101.872 178.909 101.616C179.421 101.36 179.805 100.912 180.061 100.272L180.957 98.096L179.805 103.472L163.485 69.744H177.181L182.749 82.416L185.053 89.84H185.885L187.997 82.288L192.797 69.744H206.237L190.941 103.28C189.789 105.797 188.424 107.76 186.845 109.168C185.309 110.576 183.432 111.536 181.213 112.048C178.994 112.603 176.306 112.88 173.149 112.88ZM245.113 102H233.081V85.744C233.081 83.4827 232.59 81.9467 231.609 81.136C230.628 80.2827 228.814 79.856 226.169 79.856C223.524 79.856 221.753 80.2613 220.857 81.072C220.004 81.84 219.577 83.2693 219.577 85.36H218.361L217.337 79.536H219.449C219.705 77.744 220.281 76.0587 221.177 74.48C222.116 72.9013 223.481 71.6213 225.273 70.64C227.108 69.616 229.454 69.104 232.313 69.104C235.214 69.104 237.604 69.6373 239.481 70.704C241.401 71.7707 242.809 73.2213 243.705 75.056C244.644 76.8907 245.113 78.9813 245.113 81.328V102ZM219.577 102H207.545V69.744H218.809V79.664L219.577 79.984V102ZM286.878 102H274.846V85.744C274.846 83.4827 274.334 81.9467 273.31 81.136C272.286 80.2827 270.387 79.856 267.614 79.856C265.779 79.856 264.35 80.0267 263.326 80.368C262.345 80.7093 261.662 81.2853 261.278 82.096C260.894 82.864 260.702 83.952 260.702 85.36H259.23V79.536H261.342C261.683 77.7013 262.323 75.9947 263.262 74.416C264.243 72.8373 265.63 71.5573 267.422 70.576C269.214 69.5947 271.475 69.104 274.206 69.104C277.065 69.104 279.433 69.6587 281.31 70.768C283.187 71.8773 284.574 73.392 285.47 75.312C286.409 77.1893 286.878 79.3227 286.878 81.712V102ZM260.702 102H248.67V59.12H260.702V102Z'/>
          <path d='M16.576 60.64C13.2907 60.64 10.496 59.9787 8.192 58.656C5.93067 57.2907 4.20267 55.3493 3.008 52.832C1.856 50.3147 1.28 47.328 1.28 43.872C1.28 40.3733 1.856 37.3867 3.008 34.912C4.16 32.3947 5.824 30.4747 8 29.152C10.2187 27.7867 12.9067 27.104 16.064 27.104C19.8613 27.104 22.72 27.936 24.64 29.6C26.56 31.2213 27.7547 33.376 28.224 36.064H30.08V43.488H28.864C28.864 41.2267 28.2027 39.7547 26.88 39.072C25.6 38.3893 23.616 38.048 20.928 38.048C19.0933 38.048 17.6213 38.24 16.512 38.624C15.4027 39.008 14.6133 39.6267 14.144 40.48C13.6747 41.2907 13.44 42.4213 13.44 43.872C13.44 45.28 13.6747 46.4107 14.144 47.264C14.6133 48.1173 15.4027 48.736 16.512 49.12C17.6213 49.4613 19.0933 49.632 20.928 49.632C22.72 49.632 24.192 49.4827 25.344 49.184C26.5387 48.8853 27.4133 48.3307 27.968 47.52C28.5653 46.6667 28.864 45.472 28.864 43.936H30.08L30.976 51.296H28.992C28.48 54.496 27.2213 56.864 25.216 58.4C23.2533 59.8933 20.3733 60.64 16.576 60.64ZM40.896 60H29.632V50.912L28.864 50.08V17.12H40.896V60ZM79.2285 60H67.9645V52.832H67.3245V41.376C67.3245 39.7547 66.8978 38.7307 66.0445 38.304C65.2338 37.8347 63.7618 37.6 61.6285 37.6C59.6658 37.6 58.3005 37.8347 57.5325 38.304C56.8072 38.7733 56.4445 39.6907 56.4445 41.056V41.312H44.4125V41.184C44.4125 38.3253 45.1592 35.8507 46.6525 33.76C48.1458 31.6267 50.2578 29.984 52.9885 28.832C55.7192 27.68 58.8978 27.104 62.5245 27.104C66.2792 27.104 69.3938 27.7013 71.8685 28.896C74.3432 30.048 76.1778 31.712 77.3725 33.888C78.6098 36.0213 79.2285 38.6027 79.2285 41.632V60ZM55.1645 60.64C51.5378 60.64 48.7218 59.8507 46.7165 58.272C44.7538 56.6933 43.7725 54.5387 43.7725 51.808C43.7725 50.272 44.1352 48.9067 44.8605 47.712C45.5858 46.5173 46.7165 45.5573 48.2525 44.832C49.7885 44.064 51.7725 43.552 54.2045 43.296L67.9645 41.952V48.608L57.4045 49.824C56.8498 49.8667 56.4445 49.9947 56.1885 50.208C55.9752 50.4213 55.8685 50.6987 55.8685 51.04C55.8685 51.552 56.1032 51.8933 56.5725 52.064C57.0845 52.192 57.8098 52.256 58.7485 52.256C60.8818 52.256 62.5672 52.1493 63.8045 51.936C65.0418 51.68 65.9378 51.232 66.4925 50.592C67.0472 49.952 67.3245 49.0347 67.3245 47.84L68.2205 47.584V53.216H67.3245C66.7272 55.4773 65.4258 57.2907 63.4205 58.656C61.4152 59.9787 58.6632 60.64 55.1645 60.64ZM120.363 60H108.331V43.744C108.331 41.4827 107.84 39.9467 106.859 39.136C105.878 38.2827 104.064 37.856 101.419 37.856C98.7737 37.856 97.003 38.2613 96.107 39.072C95.2537 39.84 94.827 41.2693 94.827 43.36H93.611L92.587 37.536H94.699C94.955 35.744 95.531 34.0587 96.427 32.48C97.3657 30.9013 98.731 29.6213 100.523 28.64C102.358 27.616 104.704 27.104 107.563 27.104C110.464 27.104 112.854 27.6373 114.731 28.704C116.651 29.7707 118.059 31.2213 118.955 33.056C119.894 34.8907 120.363 36.9813 120.363 39.328V60ZM94.827 60H82.795V27.744H94.059V37.664L94.827 37.984V60ZM135.952 60H123.92V27.744H135.952V60ZM135.952 24.8H123.92V17.12H135.952V24.8ZM157.779 60.64C154.152 60.64 150.931 60.0853 148.115 58.976C145.299 57.8667 143.102 56.0747 141.523 53.6C139.944 51.1253 139.155 47.8827 139.155 43.872C139.155 40.3733 139.944 37.3867 141.523 34.912C143.102 32.3947 145.256 30.4747 147.987 29.152C150.76 27.7867 153.939 27.104 157.523 27.104C161.235 27.104 164.456 27.7227 167.187 28.96C169.918 30.1547 172.03 31.9467 173.523 34.336C175.016 36.6827 175.763 39.584 175.763 43.04C175.763 43.5947 175.742 44.1067 175.699 44.576C175.699 45.0027 175.656 45.5147 175.571 46.112H147.027V40.032H166.867L164.243 43.808C164.243 43.424 164.243 43.0613 164.243 42.72C164.243 42.336 164.243 41.952 164.243 41.568C164.243 39.6053 163.731 38.24 162.707 37.472C161.726 36.704 159.912 36.32 157.267 36.32C154.536 36.32 152.68 36.7467 151.699 37.6C150.76 38.4533 150.291 39.9893 150.291 42.208V45.28C150.291 47.5413 150.782 49.0773 151.763 49.888C152.744 50.6987 154.6 51.104 157.331 51.104C159.763 51.104 161.384 50.8907 162.195 50.464C163.048 49.9947 163.475 49.2907 163.475 48.352V47.648H175.507V48.416C175.507 50.8053 174.782 52.9173 173.331 54.752C171.88 56.5867 169.832 58.0373 167.187 59.104C164.542 60.128 161.406 60.64 157.779 60.64ZM191.015 60H178.983V17.12H191.015V60Z'/>
        </svg>
        <p className='font-sg font-bold text-3xl text-500 pb-4'>[/(h)win]</p>
      </div>

      <DSwitch/>
    </div>
  );
}

export default Hero