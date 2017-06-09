import CSSTransitionGroup from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

export default class Notifications extends React.PureComponent {
  static propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    })),
    max: PropTypes.number.isRequired
  }
  static defaultProps = {
    max: 10
  }
  render () {
    const { notifications, max } = this.props
    return (
      <div className="notifications">
        <CSSTransitionGroup
          transitionEnterTimeout={200}
          transitionLeaveTimeout={100}
          transitionName="fade"
        >
          {notifications.slice(max).map(notification => (
            <div
              className={classnames(notification.type, 'notification')}
              key={notification.id}
            >
              {notification.message}
            </div>
          ))}
        </CSSTransitionGroup>
      </div>
    )
  }
}
