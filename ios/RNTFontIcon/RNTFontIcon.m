#import "RNTFontIcon.h"

@implementation RNTFontIcon

RCT_EXPORT_MODULE(RNTFontIcon);

RCT_EXPORT_METHOD(enumFonts:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    
    NSMutableArray *fonts = [[NSMutableArray alloc] init];
    for (NSString *fontFamily in [UIFont familyNames]) {
        [fonts addObject:fontFamily];
    }
    
    resolve(@{
        @"fonts": fonts
    });
    
}

@end
