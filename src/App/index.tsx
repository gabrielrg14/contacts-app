import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { ParamList } from "../@types/ParamList";

import ContactList from "../screens/ContactList";
import FormContact from "../screens/FormContact";
import ViewContact from "../screens/ViewContact";

const Stack = createStackNavigator<ParamList>();
const Tab = createBottomTabNavigator<ParamList>();

const App = () => {
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#18a330",
        tabBarShowLabel: false,
        headerTintColor: "#FFF",
        headerStyle: { backgroundColor: "#18a330" },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="ContactList"
        component={ContactList}
        options={{
          title: "Contacts",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contacts" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FormContact"
        component={FormContact}
        options={{
          title: "Create Contact",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-add" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#FFF",
          headerStyle: { backgroundColor: "#18a330" },
          headerRightContainerStyle: { paddingRight: 5 },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewContact"
          component={ViewContact}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
