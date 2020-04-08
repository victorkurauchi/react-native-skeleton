import React from 'react';
import { BottomNavigationTab, Divider, BottomNavigationProps, BottomNavigation } from '@ui-kitten/components';
import { SafeAreaLayout } from '@/components/SafeAreaLayout';
import { ColorPaletteIcon, LayoutIcon, StarOutlineIcon } from '@/components/Icons';

export const BrandBottomNavigation = (props: BottomNavigationProps): React.ReactElement => {
  return (
    <BottomNavigation {...props}/>
  );
};

export const HomeBottomNavigation = (props): React.ReactElement => {

  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    // <SafeAreaLayout insets='bottom'>
      // <Divider/>
      <BrandBottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='Home'
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='Shifts'
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title='Themes'
          icon={ColorPaletteIcon}
        />
      </BrandBottomNavigation>
    // </SafeAreaLayout>
  );
};
