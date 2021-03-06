Clone project into your home catalog, for fast start, add code below to `~/.bashrc` and run with `zoome`:

```
# run android emulator
# to list your emulators run "emulator -list-avds"
alias and_emu="emulator @3_2_QVGA_ADP2_API_23"

# run react-native android
alias and_rea="react-native run-android"

# run all with npm server
alias zoome="and_emu & cd ~/zoome && and_rea & npm start"

# additional: run android logger
alias and_log="react-native log-android"
```

#### BUGS & FIXES
- I changed in Collapsible.js overflow to 'scroll' in render() https://github.com/oblador/react-native-collapsible/issues/51 




#### REFACTOR
- [ ] why boom when 3 times go to photo and back?
- [ ] Info.plist: SendMe needs access to the photo library, to send pictures
- [ ] Info.plist: SendMe needs access to the camera, to take pictures
- [ ] split reducers to several files
- [ ] when to save data to async storage? to not o often??
- [ ] move ModalHour and ModalEmail to one component, extract input and datepicker with one methods: onChange
- [ ] fixed gmail login on first view
- [ ] there are about 6-7 instances of Navigator in app, can we reduce to have only one? how works tabbar with navigator?
- [ ] improve cancel sending photo (cancel didn't cancel sending, only move back to camera)



#### TODO
- [ ] check why gmail is losing sended emails
- [ ] Android: find framework for background tasks/background fetch (workers, alarmmanager, timer, etc.)
- [ ] Android: test background fetch
- [ ] check if instagram pagination works (need more friends)
- [ ] [rethink react](https://facebook.github.io/react/docs/thinking-in-react.html) one more time 
- [ ] find some better abstractions for facebook & instagram reducers
- [ ] iOS: try to set specific hours for background tasks, [tutorial](https://possiblemobile.com/2013/09/ios-7-background-fetch/)
- [ ] iOS: implement background task mechanism
- [ ] iOS: trigger fetch every 15 minutes, check for hours in async storage
- [ ] sending photos to users (from insta, fb) to provided emails with titles!
- [x] move elements to partials, make higher abstractions
- [x] module with camera and gallery
- [x] implement photo module
- [x] implement settings logic (actions)
- [x] implement settings view
- [x] code recomposition: move Reducers (in some abstraction) to subfolders facebook/, instagram/
- [x] iOS: styling fb/insta/gmail view
- [x] add profile info (fetch from network)
- [x] Instagram friends with pagination
- [x] implement new design for tabbar
- [x] iOS: Gmail SDK
- [x] one component for FriendsFacebook/FriendsInstagram
- [x] Add redux to project
- [x] iOS: test background fetch (protip: Xcode > Debug > Simulate Background Fetch)
- [x] iOS: find framework for background tasks [react-native-background-fetch](https://github.com/transistorsoft/react-native-background-fetch)


#### FAQ
- what with AccessToken.getCurrent - how often trigger and where?
- Instagram Auth:
	- https://github.com/OAuthSwift/OAuthSwift/wiki/Instagram
	- https://github.com/OAuthSwift/OAuthSwift/wiki/API-with-only-HTTP-scheme-into-callback-URL
- what's the different between this two approaches:
	(state) => {
		return first: () => {
			console.log(state)
		}
	}

	(state) => {
		return (state) => {
			console.log(state)
		}
	}


#### TO LEARN
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
- http://redux.js.org/docs/basics/UsageWithReact.html
- https://facebook.github.io/react/docs/thinking-in-react.html
- https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44

1. REDUX
- https://egghead.io/courses/getting-started-with-redux
- https://egghead.io/courses/building-react-applications-with-idiomatic-redux https://github.com/tayiorbeii/egghead.io_redux_course_notes

- http://redux.js.org/docs/basics/UsageWithReact.html

- https://shift.infinite.red/a-tour-of-react-native-part-2-redux-friends-4fed022aaa1e
- http://blog.thebakery.io/todomvc-with-react-native-and-redux/
- http://makeitopen.com/tutorials/building-the-f8-app/data/
- https://css-tricks.com/learning-react-redux/
- https://github.com/alinz/example-react-native-redux
- https://www.packtpub.com/books/content/how-get-started-redux-react-native

- https://egghead.io/instructors/dan-abramov
- https://www.udemy.com/react-redux/?couponCode=Q15
- https://github.com/alinz/example-react-native-redux
- https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e#.cp0srn9ot

- grubo: https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch

- async request:
https://medium.com/@jonlebensold/getting-started-with-react-native-redux-2b01408c0053#.o49ljw4of


After REDUX
- https://blog.callstack.io/typed-redux-2aa8bff926ff#.ks370c6hz


2. IMMUTABLE
- https://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/


3. DATABASE
- realm?
- redux-persist?
- find some lib to add to redux



https://github.com/start-react/native-starter-kit
https://github.com/fbsamples/f8app
https://github.com/bartonhammond/snowflake


GOOD PRACTICES:
1. What is better? Presentational Component or React Component

A)
const Test = (props) => {
	return null;
}

B)
class Test extends Component() {

	render() {
		return null
	}
}

pros A:
- framework-agnostic (not have to use React)
- how about effeciency? it's better? it's faster? no render method, no forceUpdate?
- w ogóle jak działa react tak na prawdę? gdy wywołujemy gdziekolwiek setState() co się tak na prawdę dzieje? czy updateuje sie tylko component w którym wywołaliśmy setState? chyba tak
- a jak ciężkie jest wywołuwanie na całym reactcie rerenderu? co wtedy faktycznie sie stanie? dla Presentational Component - chyba nic! dla zwykłych Component - shouldComponentUpdate?


2. Provider - robomy wrapa na głównym komponencie i wszystkie dzieci mają dostęp do atrybutów wrapa - czemu nie robić zmiennej globalnej? Czemu nie zrobić import store from './store'?

3. Czy to subscribe na state w redux dotyczy dowolnej zmiany w stanie? czy tylko zmiany w stanie, który związany jest z danym komponentem?

4. 
