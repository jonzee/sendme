import { AccessToken } from 'react-native-fbsdk'
import { API } from './Global'

export const fetchToken = async (store) => {
  AccessToken.getCurrentAccessToken()
  .then(res => {
    console.log('Facebook sign in ', res);
    const next = API.FB_friends + res.accessToken;
    store.dispatch({
      type: 'FB_NEXT',
      next,
    })
	  fetchFacebook(store.getState().facebook, store.dispatch);
  })
  .catch(err => console.log('AccessToken error ', err));
}

// state == facebook {}
export const fetchFacebook = (state, dispatch) => {
	console.log('Facebook fetch ', state.next);
	if (typeof state.next === 'undefined') {
		return
	}
  fetch(state.next)
  .then(res => res.json())
  .then(res => {
  	console.log('Facebook fetched ', res);
    const friends = res.data.map(a => {
      return {
        name: a.name,
        foot: a.id,
        add: state.follows.indexOf(a.id) > -1,
        img: a.picture.data.url,
        id: a.id
      }
    });
    dispatch({
      type: 'FB_FETCH',
      list: friends,
      next: res.paging.next,
    })
  })
  .catch(err => console.log('Facebook: fetch friends ', err))
}

export const fetchInstagram = () => {
  
}

export const fetchData = (store) => {
	fetchFacebook(store);
	fetchInstagram(store);
}