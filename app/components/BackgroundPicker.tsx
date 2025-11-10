'use client';

import { useState } from 'react';

export interface BackgroundOption {
  id: string;
  name: string;
  type: 'gradient' | 'solid' | 'image';
  value: string;
  blur?: number; // blur amount in pixels for image backgrounds
  overlayColor?: 'black' | 'white'; // overlay color for image backgrounds
  overlayOpacity?: number; // opacity of the left side of the gradient (0-100)
}

const backgroundOptions: BackgroundOption[] = [
  // Professional Gradients
  {
    id: 'slate-gradient',
    name: 'Slate Gradient',
    type: 'gradient',
    value: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)'
  },
  {
    id: 'blue-gradient',
    name: 'Professional Blue',
    type: 'gradient',
    value: 'linear-gradient(135deg, #1e40af 0%, #0c4a6e 100%)'
  },
  {
    id: 'navy-gradient',
    name: 'Navy Professional',
    type: 'gradient',
    value: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)'
  },
  {
    id: 'charcoal-gradient',
    name: 'Charcoal Depth',
    type: 'gradient',
    value: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)'
  },
  {
    id: 'teal-gradient',
    name: 'Sophisticated Teal',
    type: 'gradient',
    value: 'linear-gradient(135deg, #0d9488 0%, #115e59 100%)'
  },
  {
    id: 'burgundy-gradient',
    name: 'Deep Burgundy',
    type: 'gradient',
    value: 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)'
  },

  // Solid Colors
  {
    id: 'deep-slate',
    name: 'Deep Slate',
    type: 'solid',
    value: '#1e293b'
  },
  {
    id: 'navy-blue',
    name: 'Navy Blue',
    type: 'solid',
    value: '#1e3a8a'
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    type: 'solid',
    value: '#065f46'
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    type: 'solid',
    value: '#374151'
  },

  // Image Backgrounds
  {
    id: 'bookshelf-1',
    name: 'Bookshelf 1',
    type: 'image',
    value: '/bookshelf_1.jpg',
    blur: 2,
    overlayColor: 'black',
    overlayOpacity: 70
  },
  {
    id: 'bookshelf-2',
    name: 'Bookshelf 2',
    type: 'image',
    value: '/bookshelf_2.jpg',
    blur: 2,
    overlayColor: 'black',
    overlayOpacity: 70
  },
  {
    id: 'background-3',
    name: 'Background 3',
    type: 'image',
    value: '/background3.jpg',
    blur: 2,
    overlayColor: 'black',
    overlayOpacity: 70
  },
  {
    id: 'background-4',
    name: 'Background 4',
    type: 'image',
    value: '/background4.jpg',
    blur: 2,
    overlayColor: 'black',
    overlayOpacity: 70
  },
  {
    id: 'background-5',
    name: 'Background 5',
    type: 'image',
    value: '/background5.jpg',
    blur: 2,
    overlayColor: 'black',
    overlayOpacity: 70
  },
  {
    id: 'background-6',
    name: 'Background 6',
    type: 'image',
    value: '/background6.jpg',
    blur: 2,
    overlayColor: 'black',
    overlayOpacity: 70
  },
];

interface BackgroundPickerProps {
  onBackgroundChange: (background: BackgroundOption) => void;
  currentBackground: BackgroundOption;
}

export default function BackgroundPicker({ onBackgroundChange, currentBackground }: BackgroundPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [blurAmount, setBlurAmount] = useState(currentBackground.blur || 0);
  const [overlayColor, setOverlayColor] = useState<'black' | 'white'>(currentBackground.overlayColor || 'black');
  const [overlayOpacity, setOverlayOpacity] = useState(currentBackground.overlayOpacity || 70);

  // Sync blur amount, overlay color, and opacity when background changes
  const handleBackgroundSelect = (bg: BackgroundOption) => {
    setBlurAmount(bg.blur || 0);
    setOverlayColor(bg.overlayColor || 'black');
    setOverlayOpacity(bg.overlayOpacity || 70);
    onBackgroundChange(bg);
  };

  const handleBlurChange = (newBlur: number) => {
    setBlurAmount(newBlur);
    onBackgroundChange({
      ...currentBackground,
      blur: newBlur
    });
  };

  const handleOverlayColorChange = (newColor: 'black' | 'white') => {
    setOverlayColor(newColor);
    onBackgroundChange({
      ...currentBackground,
      overlayColor: newColor
    });
  };

  const handleOverlayOpacityChange = (newOpacity: number) => {
    setOverlayOpacity(newOpacity);
    onBackgroundChange({
      ...currentBackground,
      overlayOpacity: newOpacity
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        Background Picker
      </button>

      {/* Picker Panel */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-2xl p-4 w-80 max-h-96 overflow-y-auto border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Choose Background</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Current Selection */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Current: <span className="font-semibold text-gray-900">{currentBackground.name}</span></p>
            <div
              className="h-12 rounded border border-gray-300 bg-cover bg-center"
              style={{
                background: currentBackground.type === 'image'
                  ? `url(${currentBackground.value})`
                  : currentBackground.value,
                filter: currentBackground.blur ? `blur(${currentBackground.blur}px)` : 'none'
              }}
            />
          </div>

          {/* Blur Control - Only show for image backgrounds */}
          {currentBackground.type === 'image' && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Blur Amount
                </label>
                <span className="text-sm text-gray-600 font-mono">
                  {blurAmount}px
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={blurAmount}
                onChange={(e) => handleBlurChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>No blur</span>
                <span>Max blur</span>
              </div>
            </div>
          )}

          {/* Overlay Color Control - Only show for image backgrounds */}
          {currentBackground.type === 'image' && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Overlay Color
                </label>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleOverlayColorChange('black')}
                  className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all ${
                    overlayColor === 'black'
                      ? 'border-primary bg-primary/10 text-primary font-semibold'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 bg-black rounded border border-gray-300" />
                    <span className="text-sm">Dark</span>
                  </div>
                </button>
                <button
                  onClick={() => handleOverlayColorChange('white')}
                  className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all ${
                    overlayColor === 'white'
                      ? 'border-primary bg-primary/10 text-primary font-semibold'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 bg-white rounded border border-gray-300" />
                    <span className="text-sm">Light</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Overlay Opacity Control - Only show for image backgrounds */}
          {currentBackground.type === 'image' && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Overlay Opacity
                </label>
                <span className="text-sm text-gray-600 font-mono">
                  {overlayOpacity}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={overlayOpacity}
                onChange={(e) => handleOverlayOpacityChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Transparent</span>
                <span>Opaque</span>
              </div>
            </div>
          )}

          {/* Gradients Section */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Gradients</h4>
            <div className="grid grid-cols-2 gap-2">
              {backgroundOptions.filter(bg => bg.type === 'gradient').map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => {
                    handleBackgroundSelect(bg);
                  }}
                  className={`group relative overflow-hidden rounded-lg border-2 transition-all ${
                    currentBackground.id === bg.id
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div
                    className="h-16 w-full"
                    style={{ background: bg.value }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">
                      {bg.name}
                    </span>
                  </div>
                  {currentBackground.id === bg.id && (
                    <div className="absolute top-1 right-1 bg-primary text-white rounded-full p-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Solid Colors Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Solid Colors</h4>
            <div className="grid grid-cols-4 gap-2">
              {backgroundOptions.filter(bg => bg.type === 'solid').map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => {
                    handleBackgroundSelect(bg);
                  }}
                  title={bg.name}
                  className={`group relative overflow-hidden rounded-lg border-2 transition-all aspect-square ${
                    currentBackground.id === bg.id
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div
                    className="w-full h-full"
                    style={{ background: bg.value }}
                  />
                  {currentBackground.id === bg.id && (
                    <div className="absolute top-0.5 right-0.5 bg-white text-primary rounded-full p-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Image Backgrounds Section */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Image Backgrounds</h4>
            <div className="grid grid-cols-2 gap-2">
              {backgroundOptions.filter(bg => bg.type === 'image').map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => {
                    handleBackgroundSelect(bg);
                  }}
                  className={`group relative overflow-hidden rounded-lg border-2 transition-all ${
                    currentBackground.id === bg.id
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div
                    className="h-16 w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${bg.value})`,
                      filter: `blur(${bg.blur || 0}px)`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">
                      {bg.name}
                    </span>
                  </div>
                  {currentBackground.id === bg.id && (
                    <div className="absolute top-1 right-1 bg-primary text-white rounded-full p-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { backgroundOptions };
