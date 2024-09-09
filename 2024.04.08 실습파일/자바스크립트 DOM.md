## DOM요소 컬렉션
HTMLCollection과 NodeList는 문서내에 노드들을 가지고 있는 유사배열

1.HTMLCollection
동적 리스트(Live)로써 DOM의 변경사항을 실시간으로 반영함.
즉, 요소를제거하거나 DOM에 추가하면 목록이 자동으로 업데이터 됨

> getElementsByTagName()
> getElementsByClassName()

2.NodeList
정적 리스트(Non-live)로 노드 객체의 상태 변화를 실시간으로 반영하지 못함.

> getElementsByName()
> querySelectorAll()