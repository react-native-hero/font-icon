#import "RNTFontIcon.h"

@implementation RNTFontIcon

RCT_EXPORT_MODULE(RNTFontIcon);

RCT_EXPORT_METHOD(enumFonts) {
    
    for (NSString *fontFamily in [UIFont familyNames]) {
        NSLog(@"font family: %@", fontFamily);
        for (NSString *fontName in [UIFont fontNamesForFamilyName: fontFamily]) {
            NSLog(@"font name: %@", fontName);
        }
    }
    
}

@end
