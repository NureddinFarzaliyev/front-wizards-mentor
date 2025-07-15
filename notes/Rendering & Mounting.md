# Trigger a render

There are two reasons for a component to render:

- It’s the component’s initial render.
- The component’s (or one of its ancestors’) state has been updated.

Once the component has been initially rendered, you can trigger further renders by updating its state with the set function. Updating your component’s state automatically queues a render.

# Logical AND operator (&&)

Another common shortcut you’ll encounter is the JavaScript logical AND (&&) operator. Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With &&, you could conditionally render the checkmark only if isPacked is true:

```jsx
return (
  <li className="item">
    {name} {isPacked && "✔"}
  </li>
);
```

You can read this as **“if isPacked, then (&&) render the checkmark, otherwise, render nothing”**.

### Pitfall

Don’t put numbers on the left side of &&.
To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.
For example, a common mistake is to write code like:
`messageCount && <p>New messages</p>`
It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!
To fix it, make the left side a boolean:
`messageCount > 0 && <p>New messages</p>`.

# Re-mounting

Re-mounting happens when the component is not the same component before
