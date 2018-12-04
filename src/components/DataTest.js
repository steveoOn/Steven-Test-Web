import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: grid;
`

const PeopleList = styled.div`
  background: transparent;
  margin: 0;
  display: grid;
  grid-template-columns: 80px auto;
  align-items: center;
  color: #555555;
  text-transform: capitalize;
`

const Image = styled.img`
  border-radius: 10px;
  padding: 10px 0;
`

class DataContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
    }
  }
  // 使用 componentDidMount lifecycle 方法获取第三方 API
  componentDidMount() {
    this.fetchData()
  }
  // 定义 fetchData 方法
  fetchData() {
    fetch('https://randomuser.me/api/?results=10&nat=us')
      // 转换为 JSON 格式
      .then(response => response.json())
      // 重新 loop JOSN，并创建一个新的数组 user
      .then(parsedJSON =>
        parsedJSON.results.map(user => ({
          // 为 user 数组重新定义数据 title 和 value，!注意这里使用 `` 而非 ''
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          image: `${user.picture.medium}`,
        }))
      )
      // 更新 state 中定义的数组 people
      .then(people =>
        this.setState({
          people,
        })
      )
  }

  render() {
    // 导入 state 中的数组 people
    const { people } = this.state

    return (
      <Content>
        {/* 重新 loop people 并新建 person 数组，将其渲染出来，没有 key 值会报错 */}
        {people.map(person => {
          return (
            <PeopleList key={person.username}>
              <Image src={person.image} />
              {person.name}
            </PeopleList>
          )
        })}
      </Content>
    )
  }
}

export default DataContainer
