
var LibraryXlib = {
  XOpenDisplay: function() {
    return 1; // We support 1 display, the canvas
  },

  XCreateWindow: function(display, parent, x, y, width, height, border_width, depth, class_, visual, valuemask, attributes) {
    // All we can do is set the width and height
    Browser.setCanvasSize(width, height);
    return 2;
  },
  XResizeWindow: function(display, parent, x, y, width, height, border_width, depth, class_, visual, valuemask, attributes) {
    // All we can do is set the width and height
    Browser.setCanvasSize(width, height);
    return 2;
  },

  XChangeWindowAttributes: function(){},
  XSetWMHints: function(){},
  XMapWindow: function(){},
  XStoreName: function(){},
  XInternAtom: function(display, name_, hmm) { return 0 },
  XSendEvent: function(){},
  XPending: function(display) { return 0 },

  // jsdf
  XCreateSimpleWindow: function(display, parent, x, y, width, height, border_width, border, background) {
    // All we can do is set the width and height
    Browser.setCanvasSize(width, height);
    return 2;
  },
  XCreateImage: function(){},
  XGetWindowAttributes: function(){},
  XSetWMProperties: function(){},
  XStringListToTextProperty: function(){},
  XSelectInput: function(){},
  XCreateGC: function(){},
  XCreatePixmapFromBitmapData: function(){},
  XCreatePixmapCursor: function(){},
  XDefineCursor: function(){},
  XGrabPointer: function(){},
  XWarpPointer: function(){},
  XUngrabPointer: function(){},
  XUndefineCursor: function(){},
  XFlush: function(){},
  XSetWMName: function(){},
  XFree: function(){},
  DefaultVisual: function(){},
  XDestroyImage: function(){},
  XSetWMNormalHints: function(){},
  XPutImage: function(){
    console.log('XPutImage')
  },
  XFreePixmap: function(){},
};

mergeInto(LibraryManager.library, LibraryXlib);

